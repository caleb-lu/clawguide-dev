# ClawGuide 爬虫系统使用指南

## ✅ 爬虫系统已创建完成！

### 📊 第一次运行结果

- **教程数量**: 79 条（来自 Dev.to）
- **Skills 数量**: 36 条（GitHub + 生成）

---

## 🚀 如何使用

### 1️⃣ 手动运行爬虫

```bash
# 进入爬虫目录
cd scraper

# 运行完整爬虫（教程 + skills）
node index.js

# 或者使用 npm 脚本
npm run scrape
```

### 2️⃣ 查看爬取的数据

爬取的数据保存在：
- `src/data/tutorials.json` - 教程数据
- `src/data/skills.json` - Skills 数据

### 3️⃣ 启动网站查看更新

```bash
# 回到项目根目录
cd ..

# 启动开发服务器
npm run dev
```

访问 http://localhost:4321 查看更新后的数据！

---

## 📡 可用命令

| 命令 | 说明 |
|------|------|
| `cd scraper && node index.js` | 运行完整爬虫 |
| `cd scraper && node collectors/tutorials.js` | 只爬取教程 |
| `cd scraper && node collectors/skills.js` | 只爬取 skills |
| `cd scraper && npm start` | 启动 API 服务器 |
| `cd scraper && npm run schedule` | 启动定时任务 |

---

## 🔄 定时自动更新

### 启动定时任务调度器

```bash
cd scraper
npm run schedule
```

调度器会自动执行：
- ⏰ **每天凌晨 2 点** - 完整爬虫
- ⏰ **每 6 小时** - 快速爬虫

让调度器在后台运行即可保持数据自动更新！

---

## 📡 API 服务器

### 启动 API

```bash
cd scraper
npm start
```

API 将运行在 http://localhost:3001

### API 端点

```
GET  /api/tutorials     - 获取所有教程
GET  /api/skills        - 获取所有 skills
GET  /api/stats         - 获取统计信息
GET  /api/last-update   - 最后更新时间
POST /api/scrape        - 手动触发爬虫
```

---

## 📈 数据统计

### 当前数据来源

**教程数据:**
- ✅ Dev.to - 79 条
- ⏳ GitHub (awesome-openclaw) - 仓库不存在，待添加真实仓库
- ⏳ Bilibili - 需要处理反爬虫
- ⏳ CSDN - 需要处理反爬虫

**Skills 数据:**
- ✅ GitHub 搜索 - 20 条
- ✅ 生成的常用 skills - 16 条

---

## ⚠️ 注意事项

### 网站可能被反爬虫屏蔽

一些网站（Bilibili、CSDN）有反爬虫措施，可能返回 521/403 错误。

**解决方案:**
1. 使用代理服务器
2. 降低爬取频率
3. 添加更真实的 User-Agent
4. 使用 Selenium/Puppeteer 等浏览器自动化工具

### GitHub API 限制

GitHub API 有速率限制（每小时 60 次请求）。

**解决方案:**
1. 设置 GitHub Token（每小时 5000 次请求）
2. 添加请求缓存
3. 降低请求频率

---

## 🛠️ 自定义配置

### 1. 修改爬取延迟

编辑 `scraper/collectors/tutorials.js`:
```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// 将延迟时间改为 2000-3000 毫秒
```

### 2. 添加自定义数据源

在 `scraper/collectors/` 目录下创建新的收集器文件。

### 3. 修改定时任务

编辑 `scraper/scheduler.js` 中的 cron 表达式。

---

## 📝 下一步建议

### 短期 (1-2 天)
1. ✅ 添加更多 Dev.to 标签（如 'llm', 'agent'）
2. ✅ 实现 Medium 爬虫
3. ✅ 添加真实 GitHub 仓库
4. ✅ 优化数据去重逻辑

### 中期 (1 周)
1. 实现浏览器自动化（Selenium）
2. 添加数据质量评分
3. 实现智能分类
4. 添加邮件通知

### 长期 (1 月)
1. 建立真实的 OpenClaw 社区数据源
2. 实现用户提交系统
3. 添加内容审核
4. 多语言支持扩展

---

## 🆘 需要帮助？

查看详细文档：`scraper/README.md`

或检查爬虫日志了解具体错误信息。
