import cron from 'node-cron';
import { scrapeAll as scrapeTutorials } from './collectors/tutorials.js';
import { scrapeAll as scrapeSkills } from './collectors/skills.js';

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║     ClawGuide Scraper - 定时任务调度器              ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

/**
 * 每天凌晨 2 点执行爬虫
 */
cron.schedule('0 2 * * *', async () => {
  console.log('\n⏰ [定时任务] 开始执行每日爬虫...');
  const startTime = Date.now();

  try {
    await scrapeTutorials();
    await scrapeSkills();

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`✅ [定时任务] 完成，耗时 ${duration}s\n`);

  } catch (error) {
    console.error('❌ [定时任务] 失败:', error);
  }
}, {
  timezone: 'Asia/Shanghai'
});

/**
 * 每 6 小时执行一次快速爬虫（只爬取重要来源）
 */
cron.schedule('0 */6 * * *', async () => {
  console.log('\n⏰ [快速爬虫] 开始执行...');

  try {
    // 可以添加快速爬虫逻辑，只爬取 Dev.to 等快速来源
    console.log('✅ [快速爬虫] 完成\n');

  } catch (error) {
    console.error('❌ [快速爬虫] 失败:', error);
  }
}, {
  timezone: 'Asia/Shanghai'
});

console.log('✅ 定时任务已启动:');
console.log('   • 每天凌晨 2 点 - 完整爬虫');
console.log('   • 每 6 小时 - 快速爬虫');
console.log('\n按 Ctrl+C 停止调度器\n');

// 保持进程运行
process.on('SIGINT', () => {
  console.log('\n\n👋 收到停止信号，正在关闭调度器...\n');
  process.exit(0);
});
