const FREE_MODEL = "openrouter/free";
const MAX_MESSAGE_CHARS = 4000;
const MAX_REQUESTS_PER_IP_PER_DAY = 20;

const PROFILE = `
你是一个候选人的个人 Agent，面向 HR、招聘经理和潜在合作方。
回答必须基于以下资料，不要编造不存在的学历、公司、奖项或数据。
如果资料不足，要明确说明“目前资料里没有写”。

候选人资料：
- 姓名：吴臻愿
- 目标岗位：AI 应用工程师 / 前端工程师 / Agent 产品工程师
- 核心能力：React、TypeScript、LLM API、Agent 工作流、产品原型
- 代表项目：个人 Agent 网站，使用 GitHub Pages、Cloudflare Worker 和免费模型 API，帮助 HR 通过对话了解候选人
- 联系方式：your.email@example.com

经历结构：
- 校园基础：学校、专业、课程、实验室、竞赛或校园项目
- 项目实践：课程项目、个人 Demo、开源项目
- 实习工作：公司、岗位、业务背景、协作方式、个人职责和结果
- Agent 方向：最新 AI 应用、个人 Agent、可部署作品和未来发展方向

回答要求：
- 项目经历优先使用 STAR 法则：Situation、Task、Action、Result
- 技术栈要单独列出
- 必须说明候选人扮演的角色，不能把团队成果全部说成个人成果
- 如果用户追问细节，先基于已知资料回答，再说明哪些信息需要候选人补充
- 回答要简洁，默认 4 到 8 句话；除非用户要求，不要写长篇
`;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return json({ error: "Use POST /" }, 405);
    }

    if (!env.OPENROUTER_API_KEY) {
      return json({ error: "Missing OPENROUTER_API_KEY" }, 500);
    }

    if (isFreeModel(FREE_MODEL) === false) {
      return json({ error: "Refusing to call a non-free model" }, 500);
    }

    const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
    if (isOverDailyLimit(clientIp)) {
      return json(
        { answer: "今天这个访问来源的免费问答次数已用完，请明天再试。" },
        429,
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    const message = String(body.message || "").trim().slice(0, MAX_MESSAGE_CHARS);
    if (!message) {
      return json({ error: "Missing message" }, 400);
    }

    try {
      const answer = await callOpenRouter(env.OPENROUTER_API_KEY, message);
      return json({ answer, model: FREE_MODEL });
    } catch (error) {
      return json(
        {
          answer:
            "免费模型服务暂时不可用，可能是免费额度、排队或上游限制导致。请稍后再试。",
          error: String(error?.message || error),
        },
        502,
      );
    }
  },
};

async function callOpenRouter(apiKey, message) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://yourname.github.io",
      "X-Title": "Personal Agent Portfolio",
    },
    body: JSON.stringify({
      model: FREE_MODEL,
      messages: [
        { role: "system", content: PROFILE },
        { role: "user", content: message },
      ],
      temperature: 0.4,
      max_tokens: 700,
      provider: {
        allow_fallbacks: false,
      },
      max_price: {
        prompt: 0,
        completion: 0,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "模型没有返回有效内容。";
}

function isFreeModel(model) {
  return model === "openrouter/free" || model.endsWith(":free");
}

function isOverDailyLimit(clientIp) {
  const storageKey = `agent-limit:${new Date().toISOString().slice(0, 10)}:${clientIp}`;
  const current = Number(globalThis.__agentLimits?.[storageKey] || 0);

  globalThis.__agentLimits ||= {};
  globalThis.__agentLimits[storageKey] = current + 1;

  return current >= MAX_REQUESTS_PER_IP_PER_DAY;
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
