# GitHub Pages Personal Agent

前端托管在 GitHub Pages，个人 Agent 通过 Cloudflare Worker 调用 OpenRouter 免费模型。API Key 只放在 Worker Secret 里，不放进前端。

## 选型

- 静态网站：GitHub Pages
- 代理层：Cloudflare Worker Free
- 模型服务：OpenRouter
- 当前模型：`openrouter/free`
- 费用策略：代码只允许调用 `openrouter/free` 或模型名包含 `:free` 的 OpenRouter 免费模型

## 部署 Worker

### 方式 A：Cloudflare 控制台部署

适合本地没有 `wrangler` 的情况。

1. 打开 Cloudflare Dashboard
2. 进入 `Workers & Pages`
3. 创建一个 Worker，例如 `personal-agent-api`
4. 把 `worker/index.js` 的全部内容粘贴进去
5. 进入 Worker 的 `Settings` / `Variables`
6. 添加 Secret：
   - Name: `OPENROUTER_API_KEY`
   - Value: 你的 OpenRouter API Key
7. 保存并部署
8. 复制 Worker URL，填到 `config.js`

### 方式 B：wrangler 部署

如果本地有 `wrangler`：

```bash
cd worker
wrangler secret put OPENROUTER_API_KEY
wrangler deploy
```

部署成功后，把 Worker URL 填到 `config.js`：

```js
window.PERSONAL_AGENT_CONFIG = {
  agentEndpoint: "https://你的-worker地址.workers.dev",
};
```

## 避免收费

代码层已经做了这些限制：

- 只保留 OpenRouter 调用，删除 Gemini 分支
- 固定模型为 `openrouter/free`
- 如果模型不是 `openrouter/free` 且不包含 `:free`，Worker 会拒绝调用
- 请求里设置了 `max_price: { prompt: 0, completion: 0 }`
- 单次输入最多 4000 字符
- 单 IP 每天最多 20 次问答
- 单次回答最多 700 tokens

你还需要在 OpenRouter 账户侧确认：

- 不要开启自动充值
- 不要切换到非 `:free` 模型
- 不要把 OpenRouter API Key 放到 GitHub 或前端代码里

## 修改个人资料

主要改：

- `worker/index.js` 里的 `PROFILE`
- `app.js` 里的 `projects`
- `app.js` 里的 `experienceEvents`
- `profile/resume.md`
- `profile/personal-advantages.md`：个人优势
- `profile/professional-skills.md`：专业技能
- `profile/work-content.md`：工作内容
- `profile/work-achievements.md`：工作业绩
- `profile/project-order-admin.md`：订单管理站点建设与全栈升级
- `profile/project-query-sharding-es.md`：订单分库分表与 ES 统一查询平台
- `profile/project-timeout-review.md`：订单超时统一闭环与预处理审核平台优化
- `profile/project-order-split.md`：订单拆单系统标准化重构

Agent 的回答质量主要取决于 `PROFILE` 写得是否具体。

## Agent 知识库

当前个人 Agent 的知识拆成多份 Markdown：

1. `profile/personal-advantages.md`：面向 HR 的候选人核心优势，包括 Java 后端、全栈、AI 工具、985 科班、学习能力和独立交付能力。
2. `profile/professional-skills.md`：专业技能，包括 Java 基础、Spring 生态、微服务、MySQL、Redis、MQ、Elasticsearch、分布式、前端、AI 工程能力。
3. `profile/work-content.md`：日常工作职责，包括交易订单核心研发、订单查询平台、订单管理后台、分库分表、ES 查询平台、拆单标准化、订单超时中心、大促稳定性保障等。
4. `profile/work-achievements.md`：核心业绩与可量化结果，包括大促无重大故障、亿级订单支撑、万级复杂查询、数十万+查询流量、数百个业务需求交付、拆单率 15% 优化至 6% 等。
5. `profile/project-order-admin.md`：项目一，订单管理站点建设与全栈升级。
6. `profile/project-query-sharding-es.md`：订单分库分表与 ES 统一查询平台。
7. `profile/project-timeout-review.md`：项目三，订单超时统一闭环与预处理审核平台优化。
8. `profile/project-order-split.md`：项目四，订单拆单系统标准化重构。

注意：GitHub Pages 是纯静态站，Cloudflare Worker 不能自动读取仓库里的 Markdown。要让线上 Agent 真正使用这些资料，需要把关键事实同步进 `worker/index.js` 的 `PROFILE`，当前版本已经完成同步。
