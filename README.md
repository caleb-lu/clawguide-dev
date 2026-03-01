# ClawGuide.dev

<div align="center">

**真正做事的 AI 助手导航站**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[演示](https://clawguide.dev) • [快速开始](#-快速开始) • [功能特性](#-功能特性) • [文档](#-文档)

</div>

---

## 📖 简介

**ClawGuide.dev** 是一个精心策划的 **OpenClaw AI 助手教程导航网站**，为开发者提供：

- 📚 **333+** 精选教程资源
- 🛠️ **1715+** OpenClaw Skills
- 🌍 **31 个**技能分类
- 🗣️ **中英双语**支持
- ⚡ **6-12ms** 页面加载速度

## ✨ 功能特性

### 🎯 核心功能
- **教程聚合**: 官方文档、云部署、视频教程、深度解析
- **Skills 目录**: 31 个分类，支持搜索和筛选
- **智能搜索**: 实时搜索，支持分类、语言、来源筛选
- **响应式设计**: 完美适配桌面、平板、手机

### 🎨 技术栈
- **前端框架**: [Astro](https://astro.build) - 静态站点生成
- **样式方案**: [Tailwind CSS](https://tailwindcss.com)
- **语言**: TypeScript
- **部署**: Vercel / Netlify / Cloudflare Pages

### 🔍 SEO 优化
- ✅ 完整的 meta 标签
- ✅ Open Graph 和 Twitter Card
- ✅ JSON-LD 结构化数据
- ✅ robots.txt 和 sitemap.xml
- ✅ 语义化 HTML

### 💰 变现支持
- ✅ Google AdSense 完整集成
- ✅ 4 个广告位（顶部、中部、侧边栏、底部）
- ✅ 测试/生产模式切换
- ✅ 响应式广告单元

### 🤖 自动化工具
- **Web 爬虫**: 自动收集教程和 Skills
- **API 服务器**: RESTful API 接口
- **定时任务**: 每日自动更新数据
- **自动化测试**: 100% 测试覆盖率

## 🚀 快速开始

### 环境要求
- Node.js >= 18.x
- npm 或 yarn

### 安装

```bash
# 克隆仓库
git clone https://github.com/your-username/clawguide-dev.git
cd clawguide-dev

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

### 构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
clawguide-dev/
├── src/
│   ├── components/      # Astro 组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── AdBanner.astro
│   ├── config/          # 配置文件
│   │   └── adsense.ts   # AdSense 配置
│   ├── data/            # 数据文件
│   │   ├── tutorials.ts
│   │   └── skills.ts
│   ├── layouts/         # 页面布局
│   │   └── BaseLayout.astro
│   ├── pages/           # 页面路由
│   │   ├── index.astro
│   │   ├── tutorials.astro
│   │   ├── skills.astro
│   │   └── about.astro
│   └── styles/          # 样式文件
├── scraper/             # 爬虫系统
│   ├── collectors/      # 数据采集器
│   ├── api/            # API 服务器
│   └── scheduler.js    # 定时任务
├── tests/              # 测试脚本
└── public/             # 静态资源
```

## 🔧 配置

### AdSense 配置

编辑 `src/config/adsense.ts`：

```typescript
// 替换为你的 AdSense 发布商 ID
export const ADSENSE_PUBLISHER_ID = 'ca-pub-xxxxxxxxxxxxxxxx';

// 关闭测试模式以显示真实广告
export const ADSENSE_TEST_MODE = false;
```

详细指南请查看 [AdSense 集成文档](./ADSENSE_GUIDE.md)。

### 爬虫配置

```bash
# 运行爬虫收集数据
npm run scrape

# 启动 API 服务器
npm run api

# 启动定时任务
npm run schedule
```

## 📊 自动化测试

```bash
# 运行自动化测试
npm run test

# 检查 AdSense 配置
node tests/adsense-test.cjs
```

## 📚 文档

- [SEO 优化指南](./SEO_GUIDE.md)
- [AdSense 集成指南](./ADSENSE_GUIDE.md)
- [AdSense 快速开始](./ADSENSE_QUICKSTART.md)
- [爬虫系统文档](./SCRAPER_GUIDE.md)

## 🌐 部署

### Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### Netlify

```bash
# 构建命令
npm run build

# 发布目录
dist
```

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Astro](https://astro.build) - 强大的静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 实用的 CSS 框架
- [OpenClaw](https://openclaw.ai) - 开源 AI 助手平台

---

<div align="center">

**为 OpenClaw 社区精心策划** ❤️

[网站](https://clawguide.dev) • [文档](./docs) • [问题反馈](./issues)

</div>
