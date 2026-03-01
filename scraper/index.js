import { scrapeAll as scrapeTutorials } from './collectors/tutorials.js';
import { scrapeAll as scrapeSkills } from './collectors/skills.js';

/**
 * 主爬虫入口
 */
async function main() {
  console.log('\n');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║     ClawGuide.dev - Web Scraper                    ║');
  console.log('║     自动收集 OpenClaw 教程和 Skills                ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
  console.log('\n');

  const startTime = Date.now();

  try {
    // 爬取教程
    await scrapeTutorials();

    // 爬取 skills
    await scrapeSkills();

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log(`\n✅ All scraping completed in ${duration}s`);
    console.log('\n💡 提示: 运行 npm run dev 查看更新后的网站\n');

  } catch (error) {
    console.error('\n❌ Scraping failed:', error);
    process.exit(1);
  }
}

// 运行主程序
main();
