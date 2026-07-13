# AI 创作工具箱 ✨

一站式 AI 自媒体创作工具箱，覆盖小红书笔记创作、多平台文案改写、文案评分、违禁词检测、短视频脚本生成五大核心场景。

## 🚀 技术栈

- **框架**: Astro + Tailwind CSS (CDN)
- **部署**: Cloudflare Pages
- **AI**: 火山引擎 ARK API (豆包大模型)
- **域名**: content.hpenn.xyz (预留)

## 📦 功能模块

| 模块 | 说明 |
|---|---|
| 📕 小红书笔记创作 | AI 生成爆款笔记，标题 + 正文 + Hashtag 一步到位 |
| 🔄 多平台文案改写 | 一次输入，7 大平台风格适配（小红书/公众号/抖音/知乎/视频号/快手/B站）|
| 📊 文案智能评分 | 5 维度评分（吸引力/可读性/适配度/转化力/原创感）+ 改进建议 |
| 🔍 违禁词检测 | 200+ 违禁词库，广告法 + 各平台敏感词，纯前端实时检测 |
| 🎬 短视频脚本生成 | 分镜脚本 + 口播文案 + 字幕 + BGM 建议，拿来就能拍 |

## 🔧 本地开发

```bash
npm install
npm run dev
```

## 🌐 部署到 Cloudflare Pages

1. Fork 本项目
2. 在 Cloudflare Dashboard 创建 Pages 项目，连接 GitHub 仓库
3. 设置环境变量：
   - `ARK_API_KEY` - 火山引擎 ARK API Key
   - `ARK_MODEL_ID` - 豆包模型 Endpoint ID
4. 构建配置：
   - Build command: `npm run build`
   - Output directory: `dist`
5. 部署完成

## ⚙️ 环境变量

| 变量名 | 说明 |
|---|---|
| `ARK_API_KEY` | 火山引擎 ARK API Key |
| `ARK_MODEL_ID` | 豆包模型 Endpoint ID |

## 📄 License

MIT
