# ClawGuide 爬虫系统

自动收集 OpenClaw 教程和 Skills 的爬虫系统。

## 📁 目录结构

```
scraper/
├── api/
│   └── server.js          # API 服务器
├── collectors/
│   ├── tutorials.js       # 教程爬虫
│   └── skills.js          # Skills 爬虫
├── utils/
│   └── storage.js         # 数据存储工具
├── data/raw/              # 原始数据备份
├── config.example.js      # 配置文件示例
├── index.js               # 主入口
└── scheduler.js           # 定时任务调度器
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd scraper
npm install
```

### 2. 运行爬虫

```bash
# 运行完整爬虫（教程 + skills）
npm run scrape

# 只爬取教程
npm run scrape:tutorials

# 只爬取 skills
npm run scrape:skills
```

### 3. 启动 API 服务器

```bash
npm start
```

API 将在 `http://localhost:3001` 运行

### 4. 启动定时调度器

```bash
npm run schedule
```

## 📡 API 端点

### 获取教程列表
```
GET /api/tutorials

查询参数:
  - category: 教程分类
  - language: 语言 (EN/中文)
  - source: 来源平台
  - search: 搜索关键词

示例:
  /api/tutorials?category=videos&language=中文
```

### 获取 Skills 列表
```
GET /api/skills

查询参数:
  - category: 技能分类
  - search: 搜索关键词

示例:
  /api/skills?category=development
```

### 获取统计信息
```
GET /api/stats
```

### 触发爬虫（仅开发环境）
```
POST /api/scrape

Body:
{
  "type": "tutorials" | "skills" | "all"
}
```

## 🔄 定时任务

系统会自动执行以下定时任务：

| 任务 | 时间 | 说明 |
|------|------|------|
| 完整爬虫 | 每天凌晨 2 点 | 爬取所有数据源 |
| 快速爬虫 | 每 6 小时 | 只爬取快速来源 |

## 📊 支持的数据源

### 教程来源
- ✅ GitHub (awesome-openclaw 仓库)
- ✅ Bilibili (视频教程)
- ✅ Dev.to (技术文章)
- ✅ CSDN (中文博客)
- 🔄 Medium (计划中)
- 🔄 YouTube (计划中)

### Skills 来源
- ✅ GitHub (开源项目)
- ✅ NPM (插件包)
- ✅ 社区贡献

## ⚙️ 配置

1. 复制配置文件:
```bash
cp config.example.js config.js
```

2. 编辑 `config.js` 设置你的配置

3. 设置环境变量 (可选):
```bash
export GITHUB_TOKEN="your_github_token"
```

## 🛡️ 反爬虫策略

- 请求延迟：每次请求间隔 1-2 秒
- 随机 User-Agent
- 并发限制：最多 3 个并发请求
- 自动重试：失败自动重试 3 次
- 数据备份：自动备份原始数据

## 📈 数据格式

### 教程数据格式
```json
{
  "id": "unique-id",
  "title": "教程标题",
  "description": "教程描述",
  "url": "https://example.com",
  "category": "videos",
  "source": "Bilibili",
  "language": "中文",
  "tags": ["video", "tutorial"],
  "featured": false,
  "scrapedAt": "2026-02-28T00:00:00.000Z"
}
```

### Skills 数据格式
```json
{
  "id": "unique-id",
  "name": "Skill 名称",
  "description": "技能描述",
  "category": "development",
  "popularity": 95,
  "verified": true,
  "scrapedAt": "2026-02-28T00:00:00.000Z"
}
```

## 🔧 故障排除

### 爬虫无数据
- 检查网络连接
- 某些网站可能需要代理
- 查看日志中的具体错误

### API 无法访问
- 确认端口 3001 未被占用
- 检查防火墙设置

### 定时任务不执行
- 确认进程正在运行
- 检查系统时区设置

## 📝 开发计划

- [ ] 添加更多数据源
- [ ] 实现智能去重算法
- [ ] 添加数据质量评分
- [ ] 实现自动内容分类
- [ ] 添加邮件通知
- [ ] Webhook 支持

## ⚠️ 注意事项

1. 遵守各网站的 robots.txt
2. 不要过于频繁地请求
3. 生产环境建议使用代理
4. 定期检查爬取的数据质量
5. 备份重要数据

## 📄 许可证

MIT
