import express from 'express';
import cors from 'cors';
import { loadTutorials, loadSkills, getStats } from '../utils/storage.js';
import { scrapeAll as scrapeTutorials } from '../collectors/tutorials.js';
import { scrapeAll as scrapeSkills } from '../collectors/skills.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

/**
 * API 健康检查
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * 获取所有教程
 */
app.get('/api/tutorials', (req, res) => {
  try {
    const { category, language, source, search } = req.query;

    let tutorials = loadTutorials();

    // 筛选
    if (category) {
      tutorials = tutorials.filter(t => t.category === category);
    }
    if (language) {
      tutorials = tutorials.filter(t => t.language === language);
    }
    if (source) {
      tutorials = tutorials.filter(t => t.source === source);
    }
    if (search) {
      const query = search.toLowerCase();
      tutorials = tutorials.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query)
      );
    }

    res.json({
      total: tutorials.length,
      data: tutorials
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 获取所有 skills
 */
app.get('/api/skills', (req, res) => {
  try {
    const { category, search } = req.query;

    let skills = loadSkills();

    // 筛选
    if (category) {
      skills = skills.filter(s => s.category === category);
    }
    if (search) {
      const query = search.toLowerCase();
      skills = skills.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
      );
    }

    res.json({
      total: skills.length,
      data: skills
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 获取统计信息
 */
app.get('/api/stats', (req, res) => {
  try {
    const stats = getStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 触发爬虫（仅开发环境）
 */
app.post('/api/scrape', async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Scraping disabled in production' });
  }

  try {
    const { type } = req.body; // 'tutorials' | 'skills' | 'all'

    let results = {};

    if (type === 'tutorials' || type === 'all') {
      results.tutorials = await scrapeTutorials();
    }

    if (type === 'skills' || type === 'all') {
      results.skills = await scrapeSkills();
    }

    res.json({
      success: true,
      message: 'Scraping completed',
      results
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 获取最后更新时间
 */
app.get('/api/last-update', (req, res) => {
  try {
    const fs = await import('fs');
    const path = await import('path');

    const dataDir = path.join(process.cwd(), '../src/data');

    // 检查文件的修改时间
    const checkFile = (filename) => {
      try {
        const stats = fs.statSync(path.join(dataDir, filename));
        return stats.mtime;
      } catch {
        return null;
      }
    };

    res.json({
      tutorials: checkFile('tutorials.json'),
      skills: checkFile('skills.json')
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`\n🚀 API Server running on http://localhost:${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET  /api/health        - 健康检查`);
  console.log(`  GET  /api/tutorials     - 获取教程列表`);
  console.log(`  GET  /api/skills        - 获取 skills 列表`);
  console.log(`  GET  /api/stats         - 获取统计信息`);
  console.log(`  POST /api/scrape        - 触发爬虫（开发环境）`);
  console.log(`  GET  /api/last-update   - 最后更新时间`);
  console.log(`\n`);
});
