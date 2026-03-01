/**
 * 爬虫配置文件
 * 复制此文件为 config.js 并修改配置
 */

export default {
  // API 服务器配置
  api: {
    port: 3001,
    cors: {
      origin: '*', // 生产环境请限制来源
      methods: ['GET', 'POST']
    }
  },

  // 爬虫配置
  scraper: {
    // 每次爬取的延迟（毫秒），避免被反爬
    delay: 1000,

    // 并发请求数
    concurrency: 3,

    // 重试次数
    retries: 3,

    // 是否启用代理（可选）
    proxy: null, // 'http://proxy.example.com:8080'

    // User-Agent
    userAgent: 'ClawGuide-Bot/1.0 (+https://clawguide.dev)'
  },

  // 数据源配置
  sources: {
    // GitHub API Token（可选，提高请求限制）
    githubToken: process.env.GITHUB_TOKEN,

    // 启用的数据源
    enabled: {
      github: true,
      bilibili: true,
      devto: true,
      csdn: true,
      npm: true
    }
  },

  // 调度配置
  scheduler: {
    // 时区
    timezone: 'Asia/Shanghai',

    // 定时任务 cron 表达式
    fullScrape: '0 2 * * *',      // 每天凌晨 2 点
    quickScrape: '0 */6 * * *'    // 每 6 小时
  },

  // 数据存储配置
  storage: {
    // 是否保留原始数据备份
    keepBackups: true,

    // 最大备份数量
    maxBackups: 10,

    // 数据文件路径
    dataDir: './src/data',
    rawDir: './scraper/data/raw'
  }
};
