import axios from 'axios';
import * as cheerio from 'cheerio';
import { loadTutorials, saveTutorials, saveRawData } from '../utils/storage.js';

// 延迟函数，避免请求过快
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * GitHub 收集器 - 收集 awesome-openclaw 等仓库的资源
 */
export async function scrapeGitHub() {
  console.log('\n🔍 Scraping GitHub...');

  const tutorials = [];

  // awesome-openclaw 仓库中的资源
  const repos = [
    'https://api.github.com/repos/awesome-openclaw/awesome-openclaw/contents/README.md',
    // 可以添加更多仓库
  ];

  for (const repoUrl of repos) {
    try {
      const response = await axios.get(repoUrl, {
        headers: {
          'User-Agent': 'ClawGuide-Scraper'
        }
      });

      // 解析 README 内容（如果是 base64 编码）
      if (response.data.content) {
        const content = Buffer.from(response.data.content, 'base64').toString('utf-8');

        // 提取链接
        const links = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];

        for (const link of links) {
          const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (match) {
            const [, title, url] = match;

            // 判断类别
            let category = 'community';
            if (url.includes('docs.') || url.includes('official')) category = 'official';
            else if (url.includes('youtube') || url.includes('bilibili')) category = 'videos';
            else if (url.includes('github.com')) category = 'tools';

            tutorials.push({
              id: `gh-${Math.random().toString(36).substr(2, 9)}`,
              title: title.trim(),
              description: `来自 GitHub 的资源`,
              url: url,
              category: category,
              source: 'GitHub',
              language: url.includes('cn') || title.includes('中文') ? '中文' : 'EN',
              tags: [category],
              featured: false,
              scrapedAt: new Date().toISOString()
            });
          }
        }
      }

      await delay(1000); // GitHub API 限制
    } catch (error) {
      console.error(`  ❌ Error scraping ${repoUrl}:`, error.message);
    }
  }

  console.log(`  ✅ Found ${tutorials.length} tutorials from GitHub`);
  return tutorials;
}

/**
 * B站 收集器 - 搜索 OpenClaw 相关视频
 */
export async function scrapeBilibili() {
  console.log('\n🔍 Scraping Bilibili...');

  const tutorials = [];
  const keywords = ['OpenClaw', 'OpenClaw教程', 'AI助手', '智能助手'];

  for (const keyword of keywords) {
    try {
      // B站搜索API（需要处理 cookies）
      const searchUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;

      const response = await axios.get(searchUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      const $ = cheerio.load(response.data);

      // 提取视频信息
      $('.video-item').each((i, elem) => {
        if (i >= 10) return false; // 限制每个关键词最多10个

        const title = $(elem).find('.title').text().trim();
        const url = $(elem).find('a').attr('href');
        const author = $(elem).find('.up-name').text().trim();

        if (url) {
          tutorials.push({
            id: `bili-${Math.random().toString(36).substr(2, 9)}`,
            title: title,
            description: `UP主: ${author}`,
            url: url.startsWith('http') ? url : `https:${url}`,
            category: 'videos',
            source: 'Bilibili',
            language: '中文',
            tags: ['video', 'bilibili'],
            featured: false,
            scrapedAt: new Date().toISOString()
          });
        }
      });

      await delay(2000); // 避免请求过快
    } catch (error) {
      console.error(`  ❌ Error scraping Bilibili for "${keyword}":`, error.message);
    }
  }

  console.log(`  ✅ Found ${tutorials.length} tutorials from Bilibili`);
  return tutorials;
}

/**
 * Dev.to 收集器
 */
export async function scrapeDevTo() {
  console.log('\n🔍 Scraping Dev.to...');

  const tutorials = [];
  const tags = ['openclaw', 'ai', 'assistant', 'llm'];

  for (const tag of tags) {
    try {
      const apiUrl = `https://dev.to/api/articles?tag=${tag}&per_page=20`;

      const response = await axios.get(apiUrl);

      for (const article of response.data) {
        tutorials.push({
          id: `devto-${article.id}`,
          title: article.title,
          description: article.description || article.title,
          url: article.url,
          category: 'community',
          source: 'Dev.to',
          language: 'EN',
          tags: article.tag_list,
          featured: article.positive_reactions_count > 10,
          scrapedAt: new Date().toISOString()
        });
      }

      await delay(1000);
    } catch (error) {
      console.error(`  ❌ Error scraping Dev.to for tag "${tag}":`, error.message);
    }
  }

  console.log(`  ✅ Found ${tutorials.length} tutorials from Dev.to`);
  return tutorials;
}

/**
 * CSDN 收集器
 */
export async function scrapeCSDN() {
  console.log('\n🔍 Scraping CSDN...');

  const tutorials = [];

  try {
    // CSDN 搜索 OpenClaw
    const searchUrl = 'https://www.csdn.net/search?q=OpenClaw';

    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(response.data);

    // 提取文章列表
    $('.search-article').each((i, elem) => {
      if (i >= 20) return false;

      const title = $(elem).find('a').text().trim();
      const url = $(elem).find('a').attr('href');
      const summary = $(elem).find('.summary').text().trim();

      if (url && title) {
        tutorials.push({
          id: `csdn-${Math.random().toString(36).substr(2, 9)}`,
          title: title,
          description: summary || title,
          url: url,
          category: 'community',
          source: 'CSDN',
          language: '中文',
          tags: ['tutorial', 'guide'],
          featured: false,
          scrapedAt: new Date().toISOString()
        });
      }
    });

  } catch (error) {
    console.error(`  ❌ Error scraping CSDN:`, error.message);
  }

  console.log(`  ✅ Found ${tutorials.length} tutorials from CSDN`);
  return tutorials;
}

/**
 * 主爬虫函数
 */
export async function scrapeAll() {
  console.log('🚀 Starting web scraping...\n');
  console.log('='.repeat(50));

  const allTutorials = [];

  // 并行爬取所有来源
  const results = await Promise.allSettled([
    scrapeGitHub(),
    scrapeBilibili(),
    scrapeDevTo(),
    scrapeCSDN()
  ]);

  // 收集成功的爬取结果
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      allTutorials.push(...result.value);
    }
  });

  // 去重
  const uniqueTutorials = removeDuplicates(allTutorials);

  // 保存数据
  saveTutorials(uniqueTutorials);
  saveRawData('all-sources', uniqueTutorials);

  console.log('\n' + '='.repeat(50));
  console.log(`✨ Scraping complete! Total tutorials: ${uniqueTutorials.length}`);
  console.log('='.repeat(50));

  return uniqueTutorials;
}

/**
 * 去重函数
 */
function removeDuplicates(tutorials) {
  const seen = new Set();
  return tutorials.filter(t => {
    // 使用 URL 作为唯一标识
    const key = t.url.toLowerCase().replace(/\/$/, '');
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
