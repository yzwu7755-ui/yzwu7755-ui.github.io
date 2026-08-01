const AGENT_ENDPOINT =
  window.PERSONAL_AGENT_CONFIG?.agentEndpoint || window.AGENT_ENDPOINT || "";

const projects = [
  {
    title: "订单管理站点建设与全栈升级",
    type: "全栈后台",
    period: "核心项目",
    role: "主导者 / 全栈开发 / 平台建设",
    summary: "统一订单查询、详情、状态处理、审核与配置能力，支撑客服、运营、履约等内部角色高效作业。",
    background: "原订单管理站点存在功能入口分散、权限粒度较粗、前后端交互不统一、重复页面建设多、敏感操作管控不足等问题，难以满足多角色、多场景下的精细化订单管理需求。",
    star: {
      situation: "客服、运营、履约、财务等角色需要统一订单作业平台，但原有系统入口分散、权限和审计不足。",
      task: "主导订单管理站点全栈建设，完成权限体系、关键操作审计、公共组件和前后端交互规范升级。",
      action: "基于 Java、Spring Boot、MyBatis 建设后端接口，基于 Vue3、TypeScript、Element Plus 开发页面；落地用户—角色—菜单—按钮—数据范围权限模型，并沉淀表单、表格、详情、状态标签、权限指令等公共组件。",
      result: "形成统一订单管理入口，支撑数百个订单业务迭代需求，提升交付效率、站点一致性、可维护性和敏感操作安全性。",
    },
    responsibilities: [
      "负责需求调研、流程梳理、技术方案、任务拆解、灰度发布和上线保障",
      "独立完成数据库设计、后端接口、Vue3 页面及前后端联调",
      "建设菜单、按钮、接口、数据范围多层权限控制体系",
      "对取消订单、状态变更、审核处理等高风险操作增加校验、二次确认和审计日志",
      "抽象查询表单、数据表格、详情卡片、状态标签、权限指令和通用弹窗",
    ],
    outcome: "推动订单管理站点由功能型后台向标准化、平台化管理系统演进，减少重复开发和跨系统沟通成本。",
    metric: "数百需求",
    stack: ["Java", "Spring Boot", "MyBatis", "MySQL", "Vue3", "TypeScript", "Element Plus", "权限模型"],
  },
  {
    title: "订单分库分表与 ES 统一查询平台",
    type: "分布式查询",
    period: "核心项目",
    role: "主导者 / 架构升级 / 查询平台",
    summary: "推动单库架构演进为 64 库 × 16 表 + ES 的分布式查询体系，支撑大规模数据与高并发查询。",
    background: "订单查询链路面临性能瓶颈和数据规模增长压力，需要同时解决单库容量、复杂查询、数据同步、一致性和高可用问题。",
    star: {
      situation: "订单数据从单库单表持续增长，查询性能、DDL 效率、复杂检索和容量扩展都成为核心瓶颈。",
      task: "主导分库分表与 ES 统一查询平台建设，完成数据迁移、分布式 ID、查询模型、数据同步和一致性校验闭环。",
      action: "完成 5.7TB 单库向 64 库 × 16 表迁移；建设雪花算法分布式 ID；设计分片分组 + 批量查询 + 有界并发模型；构建 Canal Binlog + 业务 MQ 双链路同步、ES 查询服务、降级容灾和双模式对账。",
      result: "单表规模由亿级降至百万级，存储成本下降 20%~30%，稳定支撑 10W+ 每秒请求，ES 服务可用性达到 99.999%+，完成 10 亿级数据迁移。",
    },
    responsibilities: [
      "设计并落地 64 库 × 16 表分库分表架构和迁移方案",
      "主导 Int → Long 分布式订单 ID 升级，解决容量瓶颈",
      "设计分片级查询模型，减少无效扫描与资源浪费",
      "建设 Canal Binlog + 业务 MQ 双链路同步与重试补偿机制",
      "构建 ES 查询服务、降级容灾、准实时 + 离线对账和 AI 查询 Skill",
    ],
    outcome: "构建高性能、高可用、可扩展的统一订单查询平台，显著提升查询性能、数据扩展能力和业务接入效率。",
    metric: "10W+ 每秒请求",
    stack: ["Spring Cloud", "MySQL", "Redis", "Elasticsearch", "Kafka", "Canal", "XXL-JOB", "Apollo"],
  },
  {
    title: "订单超时统一闭环与预处理审核优化",
    type: "订单治理",
    period: "核心项目",
    role: "主导者 / 流程治理 / 自动化闭环",
    summary: "建设未支付订单超时统一闭环，优化预处理审核平台，将人工处理升级为自动化处理。",
    background: "线上未支付订单缺少统一闭环机制，超时处理能力分散，支付前审核链路依赖较重，导致异常订单长期滞留和人工介入成本较高。",
    star: {
      situation: "未支付订单超时处理逻辑分散，审核链路冗余，异常订单闭环效率不足。",
      task: "主导订单超时统一闭环方案，并同步优化预处理审核平台，提升自动化治理能力。",
      action: "建设未支付订单识别、超时规则配置、任务调度、状态流转、异常补偿能力；裁撤冗余功能和非必要审核节点；配套幂等、重试、补偿、监控告警、灰度回滚和数据校验。",
      result: "实现线上订单闭环率 100%，降低客服和运营人工介入成本，沉淀可配置、可扩展的订单超时处理能力。",
    },
    responsibilities: [
      "负责项目调研、业务流程梳理、概要设计和详细设计",
      "拆解关键任务并跨产品、测试、运营、上下游团队推进",
      "建设超时识别、规则配置、任务调度、状态流转和异常补偿",
      "优化预处理审核平台，裁撤冗余节点并降低交易链路依赖",
      "通过分阶段灰度、数据校验和回滚预案保障平稳上线",
    ],
    outcome: "将订单异常处理从人工关单和排查升级为自动化闭环，提升订单状态准确性和运营处理效率。",
    metric: "闭环率 100%",
    stack: ["Java", "Spring Boot", "MySQL", "Redis", "XXL-JOB", "幂等", "重试补偿", "灰度发布"],
  },
  {
    title: "订单拆单系统标准化重构",
    type: "订单平台",
    period: "核心项目",
    role: "主导者 / 规则引擎 / 灰度体系",
    summary: "将分散拆单规则抽象为四维度模型，建设推演、灰度、幂等和并发控制体系。",
    background: "拆单规则分散、扩展性差、用户体验割裂且业务影响不可控，需要通过规则抽象和灰度推演实现平台化升级。",
    star: {
      situation: "多场景定制拆单逻辑分散，拆单时机不统一，规则变更缺少可评估和可验证机制。",
      task: "主导拆单系统标准化重构，提升规则抽象、配置化、灰度发布、一致性和并发安全能力。",
      action: "抽象指定类目、多发货方、多履约地、独立服务与虚拟商品四维度模型；统一拆单时机至订单提交履约阶段；建设影子环境历史数据推演；设计 1:1 / 1:N 与规则版本双维度灰度；用策略 + 工厂模式改造拆单引擎，并设计三级幂等 + 双阶段分布式锁。",
      result: "整体拆单率下降 6.04%，系统可用性达到 99.95%+，新业务接入周期从 3 天缩短至 1 天，开发效率提升 60%+，重复拆单率降至 0。",
    },
    responsibilities: [
      "将拆单规则抽象为四维度模型并统一执行链路",
      "基于历史数据回溯建设规则影响推演体系",
      "设计双阶段灰度发布机制和 Apollo 秒级配置下发",
      "基于策略模式 + 工厂模式实现规则可插拔与配置化管理",
      "设计三级幂等机制和拆单锁 / 取消锁并发控制体系",
    ],
    outcome: "降低拆单复杂度和规则变更风险，让拆单能力从定制逻辑升级为可灰度、可验证、可扩展的平台能力。",
    metric: "-6.04%",
    stack: ["Spring Cloud", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka", "Apollo", "XXL-JOB"],
  },
];

const skillGroups = [
  {
    title: "Java 基础",
    summary: "扎实 Java 基础与并发/JVM 理解，能支撑复杂业务系统的性能与稳定性治理。",
    skills: ["集合", "内存模型", "同步器", "线程池", "线程变量", "虚拟机调优"],
  },
  {
    title: "Spring 与微服务",
    summary: "熟悉 Spring 生态与 Spring Cloud Alibaba，具备服务治理、限流降级、灰度发布经验。",
    skills: ["Spring Boot", "MyBatis", "Nacos", "OpenFeign", "Sentinel", "Gateway"],
  },
  {
    title: "数据平台能力",
    summary: "围绕海量订单做分库分表、数据迁移、查询优化、缓存一致性和消息可靠性治理。",
    skills: ["MySQL", "多版本并发控制", "分库分表", "Redis 分布式锁", "Kafka", "RabbitMQ"],
  },
  {
    title: "搜索与一致性",
    summary: "熟练使用 Elasticsearch 建设异构查询平台，处理索引设计、同步链路和一致性闭环。",
    skills: ["Elasticsearch", "索引映射", "查询语句", "Canal", "日志 + 消息同步", "数据对账"],
  },
  {
    title: "全栈后台交付",
    summary: "具备 Java 全栈交付能力，可独立完成后台系统从数据库、接口到前端页面的闭环。",
    skills: ["Vue3", "TypeScript", "Element Plus", "Axios", "Pinia", "权限模型"],
  },
  {
    title: "AI 工程能力",
    summary: "使用 AI 工具提升研发效率，并理解智能体、工具调用、检索增强、工具协议等大模型应用能力。",
    skills: ["Cursor", "Copilot", "Claude Code", "提示词", "工具协议", "检索增强"],
  },
];

const experienceEvents = [
  {
    title: "985 科班基础",
    time: "校园阶段",
    type: "校园",
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
    type: "后端",
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
    type: "全栈",
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
    title: "AI 提效与个人智能体",
    time: "当前",
    type: "智能体",
    color: "#ff9d3e",
    size: 112,
    x: 80,
    y: 34,
    summary: "熟练使用 Cursor、Claude Code、Copilot，并将 AI 用于工程提效和个人智能体展示。",
    detail: "将 AI 应用于需求分析、代码生成、项目理解、问题排查、代码优化和技术文档编写；个人站点通过云函数接入免费模型，为招聘方提供可问答的个人智能体。",
    role: "AI 提效型工程师",
    related: ["个人智能体网站"],
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
  statusBadge.textContent = "免费在线模型";
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
          <div class="project-role">个人角色 · ${project.role}</div>
          <div class="project-result">项目结果 · ${project.star.result}</div>
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
          <h4>项目背景</h4>
          <p>${project.star.situation}</p>
        </section>
        <section class="detail-block">
          <h4>项目目标</h4>
          <p>${project.star.task}</p>
        </section>
        <section class="detail-block">
          <h4>关键行动</h4>
          <p>${project.star.action}</p>
        </section>
        <section class="detail-block">
          <h4>项目结果</h4>
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
          <h4>可追问方向</h4>
          <p>可以继续追问该阶段的业务背景、技术职责、关键项目、协作方式和量化成果。</p>
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
    return `${fallbackProfile.name} 是一位 ${fallbackProfile.role}，具备扎实的 Java 后端经验、全栈交付能力和 AI 工程提效实践。核心经历覆盖订单管理后台、分库分表、Elasticsearch 查询平台、订单超时治理和拆单标准化。核心优势包括：${fallbackProfile.strengths.join("、")}。`;
  }

  if (q.includes("岗位") || q.includes("匹配") || q.includes("jd")) {
    return `从当前资料看，最匹配的是 Java 后端工程师、Java 全栈工程师、交易订单或电商业务后端岗位，也可以匹配强调 AI 提效能力的工程岗位。核心匹配点是：有交易订单核心系统经验，熟悉 Spring Boot、Spring Cloud、MySQL、Redis、Kafka、Elasticsearch，能独立做后台全栈交付，并熟练使用 Cursor、Claude Code、Copilot 提升研发效率。`;
  }

  if (q.includes("时间") || q.includes("校园") || q.includes("工作") || q.includes("经历")) {
    return "经历脉络可以概括为：985 院校计算机科班基础 → 进入交易订单核心业务研发 → 主导订单查询、分库分表、ES 查询、拆单标准化等核心平台建设 → 进一步使用 AI 工具提升研发和交付效率，并通过个人智能体网站展示候选人信息。";
  }

  if (q.includes("角色") || q.includes("负责")) {
    return `主要项目角色包括：${projects.map((project) => `${project.title}中担任${project.role}`).join("；")}。整体来看，他不是只做单点功能开发，而是多次承担方案设计、核心开发、跨团队推进、灰度上线和稳定性保障。`;
  }

  if (q.includes("star")) {
    const project = projects[0];
    return `以“${project.title}”为例：项目背景：${project.star.situation} 项目目标：${project.star.task} 关键行动：${project.star.action} 项目结果：${project.star.result}`;
  }

  if (q.includes("项目") || q.includes("亮点")) {
    return `当前展示了 ${projects.length} 个核心项目：${projects.map((project) => project.title).join("、")}。最突出的亮点是：分库分表 + ES 查询平台支撑 10W+ 每秒请求、ES 可用性 99.999%+、5.7TB 数据迁移；拆单标准化让新业务接入从 3 天缩短至 1 天；订单超时闭环实现线上订单闭环率 100%。`;
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
    statusBadge.textContent = `在线模型 · ${data.model}`;
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
      "智能体服务暂时不可用。请检查云函数地址、模型密钥和浏览器控制台里的报错。";
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
