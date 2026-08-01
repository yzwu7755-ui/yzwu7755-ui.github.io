const AGENT_ENDPOINT =
  window.PERSONAL_AGENT_CONFIG?.agentEndpoint || window.AGENT_ENDPOINT || "";

const projects = [
  {
    title: "订单 Elasticsearch 异构查询平台",
    type: "Search Platform",
    period: "核心项目",
    role: "主导者 / 架构设计 / 核心开发",
    summary: "建设订单 ES 索引与 Binlog + MQ 双链路同步体系，支撑海量订单复杂条件实时查询。",
    background: "交易订单数据规模持续增长，传统数据库查询在复杂条件组合、跨业务场景检索和用户体验上遇到瓶颈，需要建设异构查询平台承接客服、运营、履约等高频查询。",
    star: {
      situation: "海量订单场景下，复杂条件检索依赖数据库会带来查询性能下降、链路压力上升和体验不稳定。",
      task: "主导建设订单 Elasticsearch 查询平台，统一复杂检索能力，并保证异构数据同步的一致性与可观测。",
      action: "负责索引模型设计、查询 DSL 封装、Binlog + MQ 双链路同步、一致性校验及离线对账能力建设，推动平台接入多业务场景。",
      result: "平台稳定承载万级复杂查询请求，显著提升查询性能和用户体验，并沉淀统一订单搜索能力。",
    },
    responsibilities: [
      "设计订单 ES 索引模型与查询字段映射",
      "封装复杂条件查询 DSL，降低业务接入成本",
      "建设 Binlog + MQ 双链路同步、一致性校验与离线对账",
      "推进平台化接入，支撑客服、运营、履约等查询场景",
    ],
    outcome: "解决海量订单复杂检索、查询性能及数据一致性问题，为多业务场景提供稳定实时查询能力。",
    metric: "万级复杂查询",
    stack: ["Java", "Spring Boot", "Elasticsearch", "Kafka", "Binlog", "MySQL"],
  },
  {
    title: "订单分库分表架构升级",
    type: "Data Architecture",
    period: "核心项目",
    role: "主导者 / 架构升级 / 数据迁移",
    summary: "面向海量订单数据增长完成分库分表架构演进，解决单表容量瓶颈与扩展性不足。",
    background: "订单数据快速增长导致单表容量、查询性能和后续扩展风险逐渐升高，需要对核心订单存储架构进行系统性升级。",
    star: {
      situation: "单表数据量过大后，订单查询、维护和容量扩展都面临性能与稳定性挑战。",
      task: "主导订单分库分表架构升级，并完成历史数据迁移，保障业务连续性。",
      action: "参与方案设计、数据路由、迁移链路、灰度验证和风险兜底，协同上下游完成核心链路改造。",
      result: "完成海量订单数据迁移及数据库架构演进，为未来业务增长提供稳定的数据基础设施。",
    },
    responsibilities: [
      "分析订单数据增长趋势、容量瓶颈与查询风险",
      "参与分库分表架构方案和迁移方案设计",
      "推进历史数据迁移、灰度验证与问题治理",
      "保障升级过程中的核心交易链路稳定性",
    ],
    outcome: "有效解决单表容量瓶颈和数据持续增长带来的溢出风险，提升订单系统扩展能力。",
    metric: "亿级订单支撑",
    stack: ["Java", "Spring Cloud", "MySQL", "Sharding", "Redis", "Kafka"],
  },
  {
    title: "订单管理站点全栈开发",
    type: "Full-stack Admin",
    period: "核心项目",
    role: "全栈开发 / 独立交付",
    summary: "从 0 到 1 落地订单管理后台，覆盖数据库设计、后端接口、Vue3 页面、联调与上线交付。",
    background: "订单管理、查询、履约和异常处理需要可配置、可追踪、易操作的后台工具，提高运营处理效率和研发交付效率。",
    star: {
      situation: "业务侧需要统一后台承接订单查询、审核、异常处理和规则配置，原有工具分散、体验和效率不足。",
      task: "负责订单管理站点及后台系统的全栈开发，完成从需求到上线的完整交付。",
      action: "独立完成需求分析、数据库设计、后端接口开发、Vue3 + TypeScript 页面实现、前后端联调及上线。",
      result: "落地多个中大型后台能力，沉淀通用组件和公共能力，提升后台研发效率及用户使用体验。",
    },
    responsibilities: [
      "梳理产品需求并拆解前后端实现方案",
      "完成数据库表结构、接口协议和后端业务逻辑",
      "使用 Vue3、TypeScript、Element Plus 开发管理后台页面",
      "完成联调、测试支持、上线发布和持续迭代",
    ],
    outcome: "具备独立完成项目交付的全栈能力，并对电商订单管理领域形成较深入理解。",
    metric: "0→1 交付",
    stack: ["Java", "Spring Boot", "Vue3", "TypeScript", "Element Plus", "MySQL"],
  },
  {
    title: "订单拆单标准化与异常治理",
    type: "Order Platform",
    period: "核心项目",
    role: "主导者 / 规则建模 / 平台化建设",
    summary: "统一拆单模型、规则和流程，并建设订单超时中心、预处理审核平台与异常处理闭环。",
    background: "订单拆单和异常处理规则复杂，容易造成业务理解成本高、系统维护成本高和履约效率下降。",
    star: {
      situation: "拆单逻辑分散且规则复杂，异常处理链路也需要更高自动化与闭环能力。",
      task: "主导拆单标准化建设，并完善订单超时、预处理审核和异常治理体系。",
      action: "统一拆单模型、拆单规则和处理流程，设计订单超时中心与预处理审核平台，沉淀规则配置及审核流能力。",
      result: "线上订单处理闭环率达到 100%，订单拆单率由 15% 优化至 6%，降低系统复杂度并提升履约体验。",
    },
    responsibilities: [
      "统一拆单模型、规则和标准处理流程",
      "设计订单超时中心、规则配置和自动处理能力",
      "建设预处理审核平台与异常处理闭环",
      "推进平台化能力沉淀，降低重复开发成本",
    ],
    outcome: "提升订单异常治理效率，降低业务复杂度，提高系统可维护性和履约体验。",
    metric: "15% → 6%",
    stack: ["Java", "Spring Boot", "Rule Engine", "MySQL", "Redis", "Vue3"],
  },
];

const skillGroups = [
  {
    title: "Java Backend",
    summary: "围绕交易订单核心链路完成系统设计、接口开发、性能优化和上线交付。",
    skills: ["Java", "Spring Boot", "Spring Cloud", "MySQL", "Redis", "Kafka"],
  },
  {
    title: "Data & Search",
    summary: "处理亿级订单规模下的数据扩展、异构查询、一致性校验和稳定性治理。",
    skills: ["Elasticsearch", "Sharding", "Binlog", "MQ Sync", "DSL", "Data Reconcile"],
  },
  {
    title: "Full-stack Delivery",
    summary: "能独立完成数据库设计、后端接口、Vue3 页面、联调测试和上线交付。",
    skills: ["Vue3", "TypeScript", "Element Plus", "API Design", "Admin System"],
  },
  {
    title: "AI-assisted Engineering",
    summary: "熟练使用 AI 编程工具提升需求分析、代码生成、排障优化和文档沉淀效率。",
    skills: ["Cursor", "Claude Code", "Copilot", "Prompting", "Tech Docs"],
  },
];

const experienceEvents = [
  {
    title: "985 科班基础",
    time: "校园阶段",
    type: "Campus",
    color: "#ff9d3e",
    size: 118,
    x: 20,
    y: 58,
    summary: "985 院校计算机科班出身，具备扎实计算机基础和快速学习能力。",
    detail: "计算机科班背景让候选人具备较好的系统学习能力，能够快速理解新业务、新技术，并结合真实项目完成落地。",
    role: "计算机专业学生",
    related: ["Java 后端能力", "系统设计基础"],
  },
  {
    title: "交易订单核心研发",
    time: "工作阶段",
    type: "Backend",
    color: "#f4f4ef",
    size: 128,
    x: 39,
    y: 27,
    summary: "负责订单管理、订单查询、订单履约等核心系统研发，支撑高并发交易场景。",
    detail: "承担核心系统架构设计、功能开发、技术优化和上线交付，持续推进性能优化、代码重构、线上问题治理及公共能力建设。",
    role: "Java 后端工程师 / 核心研发",
    related: ["订单 Elasticsearch 异构查询平台", "订单分库分表架构升级"],
  },
  {
    title: "管理后台全栈交付",
    time: "工作阶段",
    type: "Full-stack",
    color: "#9a9a90",
    size: 112,
    x: 64,
    y: 60,
    summary: "独立完成订单管理后台从需求分析到上线的完整交付。",
    detail: "熟悉 Vue3、TypeScript、Element Plus，能完成数据库设计、后端接口、前端页面、联调测试和持续迭代。",
    role: "Java 全栈开发 / 独立交付",
    related: ["订单管理站点全栈开发"],
  },
  {
    title: "AI 提效与个人 Agent",
    time: "Now",
    type: "AI",
    color: "#ff9d3e",
    size: 112,
    x: 80,
    y: 34,
    summary: "熟练使用 Cursor、Claude Code、Copilot，并将 AI 用于工程提效和个人 Agent 展示。",
    detail: "将 AI 应用于需求分析、代码生成、项目理解、问题排查、代码优化和技术文档编写；个人站点通过 Cloudflare Worker 接入免费模型，为 HR 提供可问答的个人 Agent。",
    role: "AI 提效型工程师",
    related: ["个人 Agent 网站"],
  },
];

const fallbackProfile = {
  name: "吴臻愿",
  role: "Java 后端 / Java 全栈 / AI 提效型工程候选人",
  strengths: ["丰富 Java 后端经验", "订单核心系统经验", "全栈独立交付", "熟练使用 AI 工具"],
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
    return `从当前资料看，最匹配的是 Java 后端工程师、Java 全栈工程师、交易订单/电商业务后端岗位，也可以匹配强调 AI 提效能力的工程岗位。核心匹配点是：有交易订单核心系统经验，熟悉 Spring Boot、Spring Cloud、MySQL、Redis、Kafka、Elasticsearch，能独立做后台全栈交付，并熟练使用 Cursor、Claude Code、Copilot 提升研发效率。`;
  }

  if (q.includes("时间") || q.includes("校园") || q.includes("工作") || q.includes("经历")) {
    return "经历脉络可以概括为：985 院校计算机科班基础 → 进入交易订单核心业务研发 → 主导订单查询、分库分表、ES 查询、拆单标准化等核心平台建设 → 进一步使用 AI 工具提升研发和交付效率，并通过个人 Agent 网站展示候选人信息。";
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
    return "HR 可以继续问：1. 订单 ES 平台如何保证数据一致性？2. 分库分表迁移如何灰度和兜底？3. 大促稳定性保障具体做了哪些压测、限流和预案？4. 订单拆单率从 15% 到 6% 的关键动作是什么？5. 你如何用 AI 工具提升需求分析、编码和排障效率？";
  }

  return `可以这样介绍：${fallbackProfile.name} 是一位 ${fallbackProfile.role}，核心优势包括 ${fallbackProfile.strengths.join("、")}。他有交易订单核心系统研发经验，参与订单管理、查询、履约、分库分表、ES 搜索和异常治理等方向，并能独立完成管理后台全栈交付。`;
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
