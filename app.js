const AGENT_ENDPOINT =
  window.PERSONAL_AGENT_CONFIG?.agentEndpoint || window.AGENT_ENDPOINT || "";

const projects = [
  {
    title: "个人 Agent 网站",
    type: "AI Web",
    period: "2026",
    role: "产品设计 / 前端实现 / Agent 接入",
    summary:
      "面向 HR 的交互式个人网站，把静态简历升级成可以提问的个人 Agent。",
    background:
      "传统简历信息密度高但互动弱，招聘方很难快速围绕岗位问题追问。这个项目用低成本静态站和 Worker 代理，把候选人资料变成可对话入口。",
    star: {
      situation: "HR 通常只能看到静态简历，很难进一步追问候选人的项目细节、真实角色和岗位匹配点。",
      task: "设计一个不购买服务器、可部署到 GitHub Pages 的个人网站，并内置一个安全可扩展的个人 Agent。",
      action:
        "搭建暗黑科技风静态页面、聊天交互、项目详情弹窗和 Cloudflare Worker 代理，避免模型 Key 暴露在浏览器中。",
      result:
        "形成可直接上线的作品集原型，HR 可以通过推荐问题或自由输入了解经历、项目、STAR 案例和 JD 匹配。",
    },
    responsibilities: [
      "设计 GitHub Pages 静态站结构和响应式界面",
      "实现聊天 UI、推荐问题和本地演示回答",
      "设计 Cloudflare Worker 代理，避免在前端泄露模型 API Key",
      "整理个人 PROFILE，约束 Agent 不编造简历事实",
    ],
    outcome:
      "无需购买服务器即可上线，适合日常几百次浏览或低频 HR 访问。后续只需要补充真实简历和项目资料。",
    metric: "0 server cost",
    stack: ["GitHub Pages", "Cloudflare Worker", "Gemini / OpenRouter", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI 项目管理助手",
    type: "Agent Workflow",
    period: "2025",
    role: "Agent 流程设计 / 前端原型",
    summary:
      "把需求、任务、风险和会议纪要整理成可执行清单的工作流助手。",
    background:
      "团队协作里大量信息散落在聊天、文档和会议中，项目推进时容易丢上下文。这个项目用于验证 Agent 对任务拆解和状态追踪的帮助。",
    star: {
      situation: "项目推进时，会议纪要、聊天记录和需求文档分散，团队容易遗漏风险和下一步动作。",
      task: "做一个能把模糊输入整理成任务、风险和建议行动的 AI 项目管理助手。",
      action:
        "设计输入解析流程、结构化输出格式、项目看板原型和 Prompt 约束，让 Agent 输出可执行清单。",
      result:
        "得到一个可演示的 Agent 工作流原型，能展示 AI 产品判断、前端实现和流程设计能力。",
    },
    responsibilities: [
      "梳理用户输入到任务结构化输出的流程",
      "设计项目看板、风险提示和下一步建议界面",
      "编写 Prompt 规则，限制输出格式并减少幻觉",
    ],
    outcome:
      "形成一个可演示原型，可用于面试展示 AI 产品思路和工程落地能力。",
    metric: "Agent workflow",
    stack: ["React", "TypeScript", "LLM API", "Prompt Engineering"],
  },
  {
    title: "数据可视化 Dashboard",
    type: "Frontend",
    period: "2024",
    role: "前端开发 / 数据表达",
    summary:
      "将指标、趋势和异常点整理成适合业务人员快速扫描的交互式面板。",
    background:
      "业务数据常常分散在表格和报告里，阅读成本高。该项目关注如何用清晰交互帮助非技术用户理解关键变化。",
    star: {
      situation: "业务指标散落在表格里，趋势和异常点不容易被快速发现。",
      task: "把核心指标、趋势变化和异常信号整理成适合业务人员扫描的 Dashboard。",
      action:
        "搭建指标卡、趋势图、筛选器和详情面板，并优化不同屏幕尺寸下的信息层级。",
      result:
        "让关键指标更容易被理解，也沉淀了数据表达、交互设计和前端工程能力。",
    },
    responsibilities: [
      "搭建指标卡、趋势图、筛选器和详情面板",
      "优化移动端布局和不同屏幕下的信息层级",
      "根据用户反馈调整图表密度和文案表达",
    ],
    outcome:
      "提升数据浏览效率，也展示了对产品体验和工程细节的综合判断。",
    metric: "Data clarity",
    stack: ["React", "Charts", "Responsive UI", "Data Modeling"],
  },
];

const skillGroups = [
  {
    title: "Frontend Systems",
    summary: "把信息结构、交互状态和响应式体验做成稳定页面。",
    skills: ["React", "TypeScript", "HTML/CSS", "Responsive UI", "State Design"],
  },
  {
    title: "Agent & LLM",
    summary: "把模型能力接入真实任务，约束输出并减少不可靠回答。",
    skills: ["LLM API", "Prompt Design", "Agent Workflow", "RAG Basics", "Safety Rules"],
  },
  {
    title: "Deployment",
    summary: "用轻量方案完成可访问、可演示、可迭代的上线闭环。",
    skills: ["GitHub Pages", "Cloudflare Worker", "API Proxy", "Secrets", "Rate Limit"],
  },
  {
    title: "Product Thinking",
    summary: "用 STAR 和业务语言解释项目价值，让技术成果能被 HR 理解。",
    skills: ["STAR Storytelling", "JD Matching", "Prototype", "User Flow", "Metrics"],
  },
];

const experienceEvents = [
  {
    title: "校园基础",
    time: "2021 - 2023",
    type: "Campus",
    color: "#ff9d3e",
    size: 118,
    x: 20,
    y: 58,
    summary: "建立计算机、前端和产品原型能力。",
    detail:
      "这里替换成你的学校、专业、核心课程、实验室或竞赛经历。重点写和目标岗位相关的训练，而不是堆所有课程。",
    role: "学生 / 项目成员",
    related: ["数据可视化 Dashboard"],
  },
  {
    title: "项目实践",
    time: "2023 - 2024",
    type: "Build",
    color: "#f4f4ef",
    size: 104,
    x: 39,
    y: 27,
    summary: "把想法做成可演示原型，积累真实作品。",
    detail:
      "这里放校园项目、课程设计、开源项目或个人 Demo。强调你负责的模块、遇到的问题和最后做出的东西。",
    role: "前端实现 / 原型设计",
    related: ["AI 项目管理助手", "数据可视化 Dashboard"],
  },
  {
    title: "实习工作",
    time: "2024",
    type: "Work",
    color: "#9a9a90",
    size: 128,
    x: 64,
    y: 60,
    summary: "进入真实业务环境，参与页面、接口和 AI 工具建设。",
    detail:
      "这里替换成公司、岗位、时间、团队背景。建议写清楚你接触的业务、承担的角色、协作方式和可量化结果。",
    role: "实习工程师 / 功能负责人",
    related: ["AI 项目管理助手"],
  },
  {
    title: "Agent 方向",
    time: "2025 - Now",
    type: "AI",
    color: "#ff9d3e",
    size: 112,
    x: 80,
    y: 34,
    summary: "聚焦 LLM 应用、个人 Agent 和可部署产品。",
    detail:
      "这里放你最新的 AI 方向项目、研究、文章或产品实验。它应该成为 HR 判断你当前方向的核心节点。",
    role: "产品工程 / Agent 接入",
    related: ["个人 Agent 网站", "AI 项目管理助手"],
  },
];

const fallbackProfile = {
  name: "吴臻愿",
  role: "AI 应用 / Web 工程候选人",
  strengths: ["前端产品实现", "LLM Agent 应用", "快速原型与工程落地"],
  projects: projects.map((project) => `${project.title}：${project.summary}`),
};

const chatLog = document.querySelector("#chat-log");
const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const statusBadge = document.querySelector("#agent-status");
const projectGrid = document.querySelector("#project-grid");
const skillGrid = document.querySelector("#skill-grid");
const experienceList = document.querySelector("#experience-list");
const projectDialog = document.querySelector("#project-dialog");
const projectDetail = document.querySelector("#project-detail");
const dialogClose = document.querySelector(".dialog-close");

if (AGENT_ENDPOINT) {
  statusBadge.textContent = "openrouter/free";
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project, index) => `
        <button class="project-card" type="button" data-project-index="${index}">
          <div class="project-topline">
            <span class="project-index">0${index + 1}</span>
            <span class="project-type">${project.period} · ${project.type}</span>
          </div>
          <div class="project-main">
            <div>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
            </div>
            <strong>${project.metric}</strong>
          </div>
          <div class="project-stack">
            ${project.stack.slice(0, 4).map((item) => `<span>${item}</span>`).join("")}
          </div>
          <div class="project-role">Role · ${project.role}</div>
          <div class="project-result">STAR Result · ${project.star.result}</div>
        </button>
      `,
    )
    .join("");
}

function renderSkills() {
  skillGrid.innerHTML = skillGroups
    .map(
      (group, index) => `
        <article class="skill-card">
          <div class="skill-number">${String(index + 1).padStart(2, "0")}</div>
          <h3>${group.title}</h3>
          <p>${group.summary}</p>
          <div class="skill-tags">
            ${group.skills.map((skill) => `<span>${skill}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderExperience() {
  experienceList.innerHTML = experienceEvents
    .map(
      (event, index) => `
        <button class="experience-item" type="button" data-experience-index="${index}">
          <span class="experience-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="experience-line" aria-hidden="true"></span>
          <span class="experience-copy">
            <time>${event.time}</time>
            <strong>${event.title}</strong>
            <span>${event.summary}</span>
          </span>
          <span class="experience-type">${event.type}</span>
        </button>
      `,
    )
    .join("");
}

function openProject(index) {
  const project = projects[index];
  if (!project) {
    return;
  }

  projectDetail.innerHTML = `
    <article class="project-detail">
      <p class="eyebrow">${project.type} / ${project.period}</p>
      <h2 id="project-dialog-title">${project.title}</h2>
      <div class="detail-meta">
        <span>角色：${project.role}</span>
      </div>
      <div class="star-grid">
        <section class="detail-block">
          <h4>Situation</h4>
          <p>${project.star.situation}</p>
        </section>
        <section class="detail-block">
          <h4>Task</h4>
          <p>${project.star.task}</p>
        </section>
        <section class="detail-block">
          <h4>Action</h4>
          <p>${project.star.action}</p>
        </section>
        <section class="detail-block">
          <h4>Result</h4>
          <p>${project.star.result}</p>
        </section>
      </div>
      <div class="detail-grid">
        <section class="detail-block">
          <h4>技术栈</h4>
          <div class="tech-list">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </section>
        <section class="detail-block">
          <h4>我的具体动作</h4>
          <ul>
            ${project.responsibilities.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
        <section class="detail-block">
          <h4>项目背景补充</h4>
          <p>${project.background}</p>
        </section>
        <section class="detail-block">
          <h4>最终结果</h4>
          <p>${project.outcome}</p>
        </section>
      </div>
    </article>
  `;

  projectDialog.showModal();
}

function openExperience(index) {
  const event = experienceEvents[index];
  if (!event) {
    return;
  }

  projectDetail.innerHTML = `
    <article class="project-detail">
      <p class="eyebrow">${event.type} / ${event.time}</p>
      <h2 id="project-dialog-title">${event.title}</h2>
      <div class="detail-meta">
        <span>角色：${event.role}</span>
      </div>
      <div class="detail-grid">
        <section class="detail-block">
          <h4>阶段概览</h4>
          <p>${event.summary}</p>
        </section>
        <section class="detail-block">
          <h4>详情</h4>
          <p>${event.detail}</p>
        </section>
        <section class="detail-block">
          <h4>关联项目</h4>
          <div class="tech-list">
            ${event.related.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </section>
        <section class="detail-block">
          <h4>建议替换内容</h4>
          <p>学校/公司、时间、角色、贡献、结果。每个节点控制在 2 到 4 个要点，保持页面干净。</p>
        </section>
      </div>
    </article>
  `;

  projectDialog.showModal();
}

function appendMessage(role, text) {
  const message = document.createElement("div");
  message.className = `message ${role}`;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  message.append(paragraph);
  chatLog.append(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function localAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("英文") || q.includes("english")) {
    return `${fallbackProfile.name} is a ${fallbackProfile.role} focused on building practical AI products. Key strengths include ${fallbackProfile.strengths.join(", ")}. The portfolio highlights hands-on work with personal agents, web interfaces, and deployable prototypes.`;
  }

  if (q.includes("岗位") || q.includes("匹配") || q.includes("jd")) {
    return `从当前资料看，最匹配的是 AI 应用工程师、前端工程师、Agent 产品工程师。匹配点：能把模糊需求拆成界面、流程和模型接入；能用低成本方案上线；项目表达里有 STAR 结构。风险点：当前仍是模板资料，需要补真实公司、学校、指标和项目结果，回答才会更像正式候选人画像。`;
  }

  if (q.includes("时间") || q.includes("校园") || q.includes("工作") || q.includes("经历")) {
    return "目前 Experience Timeline 包含四个占位阶段：校园基础、项目实践、实习工作、Agent 方向。你把真实学校、公司、时间和成果替换进去后，我可以按学校到工作的顺序解释成长路径和岗位相关性。";
  }

  if (q.includes("角色") || q.includes("负责")) {
    return `主要项目角色包括：${projects.map((project) => `${project.title}中担任${project.role}`).join("；")}。这些仍是模板内容，替换成真实项目后会更有说服力。`;
  }

  if (q.includes("star")) {
    const project = projects[0];
    return `以“${project.title}”为例：Situation：${project.star.situation} Task：${project.star.task} Action：${project.star.action} Result：${project.star.result}`;
  }

  if (q.includes("项目") || q.includes("亮点")) {
    return `当前展示了 ${projects.length} 个主要项目：${projects.map((project) => project.title).join("、")}。点击页面下方项目卡片可以进入详情，查看背景、职责、技术栈、结果和扮演的角色。`;
  }

  if (q.includes("追问") || q.includes("问题")) {
    return "HR 可以继续问：1. 你在项目中最关键的技术决策是什么？2. 哪个项目最能证明你的 AI 应用能力？3. 遇到模型回答不稳定时怎么处理？4. 你在项目里负责到什么深度？5. 如果接到真实业务 JD，你会如何拆解第一版方案？";
  }

  return `可以这样介绍：${fallbackProfile.name} 是一位偏 AI 应用和 Web 产品落地的候选人，擅长把想法快速变成可用原型。核心能力包括 ${fallbackProfile.strengths.join("、")}。当前页面还是模板状态，替换真实简历后，Agent 会围绕你的资料回答。`;
}

async function askAgent(question) {
  if (!AGENT_ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return localAnswer(question);
  }

  const response = await fetch(AGENT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: question }),
  });

  if (!response.ok) {
    throw new Error(`Agent request failed: ${response.status}`);
  }

  const data = await response.json();
  if (data.model) {
    statusBadge.textContent = data.model;
  }
  return data.answer || "我暂时没有拿到有效回答。";
}

async function handleQuestion(question) {
  appendMessage("user", question);
  input.value = "";
  input.focus();

  const thinking = "我在根据候选人资料整理回答...";
  appendMessage("agent", thinking);
  const pending = chatLog.lastElementChild.querySelector("p");

  try {
    pending.textContent = await askAgent(question);
  } catch {
    pending.textContent =
      "Agent 服务暂时不可用。请检查 Worker 地址、模型 API Key 和浏览器控制台里的报错。";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (question) {
    handleQuestion(question);
  }
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    handleQuestion(button.dataset.prompt);
  });
});

renderProjects();
renderSkills();
renderExperience();

projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-index]");
  if (!card) {
    return;
  }

  openProject(Number(card.dataset.projectIndex));
});

experienceList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-experience-index]");
  if (!item) {
    return;
  }

  openExperience(Number(item.dataset.experienceIndex));
});

dialogClose.addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});

const canvas = document.querySelector("#network-canvas");
const ctx = canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let particles = [];

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(72, Math.max(30, Math.floor(window.innerWidth / 18)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.38,
    vy: (Math.random() - 0.5) * 0.38,
    r: Math.random() * 1.8 + 0.8,
  }));
}

function drawNetwork() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "rgba(255, 156, 62, 0.52)";
  ctx.strokeStyle = "rgba(148, 135, 255, 0.12)";

  particles.forEach((particle, index) => {
    if (!prefersReducedMotion) {
      particle.x += particle.vx;
      particle.y += particle.vy;
    }

    if (particle.x < -20) particle.x = window.innerWidth + 20;
    if (particle.x > window.innerWidth + 20) particle.x = -20;
    if (particle.y < -20) particle.y = window.innerHeight + 20;
    if (particle.y > window.innerHeight + 20) particle.y = -20;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();

    for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
      const next = particles[nextIndex];
      const dx = particle.x - next.x;
      const dy = particle.y - next.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 128) {
        ctx.globalAlpha = 1 - distance / 128;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  });

  if (!prefersReducedMotion) {
    requestAnimationFrame(drawNetwork);
  }
}

resizeCanvas();
drawNetwork();
window.addEventListener("resize", resizeCanvas);
