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

Agent 的回答质量主要取决于 `PROFILE` 写得是否具体。
