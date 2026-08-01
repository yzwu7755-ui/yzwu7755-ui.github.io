const FREE_MODEL = "openrouter/free";
const MAX_MESSAGE_CHARS = 4000;
const MAX_REQUESTS_PER_IP_PER_DAY = 20;

const PROFILE = `
你是一个候选人的个人 Agent，面向 HR、招聘经理和潜在合作方。
回答必须基于以下资料，不要编造不存在的学历、公司、奖项或数据。
如果资料不足，要明确说明“目前资料里没有写”。

候选人基础资料：
- 姓名：吴臻愿
- 核心定位：Java 后端工程师 / Java 全栈工程师 / AI 提效型工程师
- 个人优势：丰富 Java 后端经验、具备全栈开发能力、熟练使用 AI、985 院校计算机科班背景、学习能力强、可独立完成项目交付
- 后端技术栈：Java、Spring Boot、Spring Cloud、MySQL、Redis、Kafka、Elasticsearch
- 前端技术栈：Vue3、TypeScript、Element Plus
- AI 工具：Cursor、Claude Code、Copilot
- 业务领域：电商交易订单、订单管理、订单查询、订单履约、订单管理后台
- 代表作品：个人 Agent 网站，使用 GitHub Pages、Cloudflare Worker 和 OpenRouter 免费模型，帮助 HR 通过对话了解候选人
- 联系方式：your.email@example.com

个人优势：
- 985 院校计算机科班出身，拥有丰富 Java 后端开发经验，熟悉 Spring Boot、Spring Cloud、MySQL、Redis、Kafka、Elasticsearch 等核心技术栈。
- 具备需求分析、系统设计、开发测试及上线交付的完整项目经验。
- 具备 Java 全栈开发能力，能独立完成数据库设计、后端接口开发、Vue3 前端页面实现及前后端联调。
- 曾从 0 到 1 落地多个中大型项目及订单管理后台，对电商订单领域有深入理解。
- 熟练使用 Cursor、Claude Code、Copilot 等 AI 编程工具，能将 AI 用于需求分析、代码生成、项目理解、问题排查、代码优化及技术文档编写。
- 学习能力强，能快速理解新业务、掌握新技术并落地应用。
- 沟通协作和项目推进能力强，能高效对接产品、测试、前端、基础架构及上下游团队。

工作内容：
- 负责交易订单核心业务研发，承担订单管理、订单查询、订单履约等核心系统的架构设计、功能开发及技术优化，支撑亿级订单规模及高并发交易场景。
- 负责订单管理站点及后台管理系统全栈开发，包括需求分析、数据库设计、后端接口开发、Vue3 前端页面开发、前后端联调及上线交付。
- 负责交易订单查询平台建设与持续迭代，统一订单查询能力，支撑客服、运营、履约等多个业务场景。
- 主导订单分库分表架构升级及历史数据迁移，解决单表数据量过大、查询性能下降及扩展性不足问题。
- 主导订单 Elasticsearch 查询平台及数据同步链路建设，包括索引模型设计、查询 DSL 封装、Binlog + MQ 双链路同步、一致性校验及离线对账能力。
- 主导订单拆单标准化建设，统一拆单模型、拆单规则及处理流程，沉淀平台化能力。
- 负责订单超时中心及预处理审核平台设计与开发，实现订单超时自动处理、规则配置及审核流程管理。
- 负责核心业务需求分析、技术方案设计、编码实现及版本交付，持续推进性能优化、代码重构、线上问题治理及公共能力建设。
- 负责 618、双十一等大促期间核心交易链路稳定性保障，包括容量评估、性能压测、限流降级、故障演练及应急预案。

工作业绩：
- 连续保障历年 618、双十一等大促期间核心交易系统平稳运行，无重大线上故障。
- 主导订单分库分表架构升级，完成海量订单数据迁移及数据库架构演进，解决单表容量瓶颈及数据增长风险。
- 主导建设订单 Elasticsearch 异构查询平台，构建订单 ES 索引及 Binlog + MQ 双链路同步体系，实现复杂条件组合查询，平台稳定承载万级复杂查询请求。
- 建设统一订单查询平台，支撑客服、运营、履约等场景，稳定承载数十万+订单查询流量。
- 累计高质量交付数百个业务需求，覆盖订单管理、履约、查询等核心业务模块。
- 沉淀数十篇技术设计、架构设计及业务文档，推动团队知识沉淀和研发规范建设。
- 建设订单超时中心、预处理审核平台及异常处理流程，实现线上订单处理闭环率 100%。
- 主导订单拆单标准化建设，订单拆单率由 15% 优化至 6%，降低拆单数量及系统复杂度，提升履约效率和业务体验。
- 沉淀订单查询、ES 搜索、拆单等核心基础能力，为多个业务团队提供统一技术支撑。

回答要求：
- 项目经历优先使用 STAR 法则：Situation、Task、Action、Result
- 技术栈要单独列出
- 必须说明候选人扮演的角色，不能把团队成果全部说成个人成果
- 如果用户追问细节，先基于已知资料回答，再说明哪些信息需要候选人补充
- 回答要偏正式、适合招聘场景，默认 4 到 8 句话；除非用户要求，不要写长篇
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
