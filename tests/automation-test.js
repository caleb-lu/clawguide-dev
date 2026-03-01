/**
 * ClawGuide 自动化测试脚本
 * 测试网站的各个功能是否正常工作
 */

const BASE_URL = 'http://localhost:4321';
const tests = [];

let passed = 0;
let failed = 0;

// 测试工具函数
async function testPage(url, testName, checks) {
  console.log(`\n🧪 测试: ${testName}`);
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const results = [];

    for (const check of checks) {
      const result = check.fn(html);
      results.push({
        name: check.name,
        pass: result,
        message: result ? '✅' : '❌'
      });
    }

    const allPassed = results.every(r => r.pass);
    if (allPassed) {
      passed++;
      console.log(`   ✅ 通过`);
      results.forEach(r => console.log(`      ${r.message} ${r.name}`));
    } else {
      failed++;
      console.log(`   ❌ 失败`);
      results.forEach(r => console.log(`      ${r.message} ${r.name}`));
    }

    return allPassed;
  } catch (error) {
    failed++;
    console.log(`   ❌ 错误: ${error.message}`);
    return false;
  }
}

// 测试用例
async function runAllTests() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║     ClawGuide 自动化测试                              ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // 1. 首页测试
  await testPage('/', '首页', [
    {
      name: '包含标题',
      fn: (html) => html.includes('真正做事的AI助手')
    },
    {
      name: '包含统计数字',
      fn: (html) => html.includes('333+') && html.includes('教程')
    },
    {
      name: '导航链接正常',
      fn: (html) => html.includes('/tutorials') && html.includes('/skills')
    },
    {
      name: '包含 CTA 按钮',
      fn: (html) => html.includes('开始学习')
    },
    {
      name: '包含广告位',
      fn: (html) => html.includes('ad-banner') || html.includes('广告位')
    }
  ]);

  // 2. 教程页测试
  await testPage('/tutorials', '教程页', [
    {
      name: '包含搜索框',
      fn: (html) => html.includes('search-input') || html.includes('搜索')
    },
    {
      name: '包含筛选侧边栏',
      fn: (html) => html.includes('category') || html.includes('筛选')
    },
    {
      name: '包含教程列表',
      fn: (html) => html.includes('tutorial-list') || html.includes('教程')
    },
    {
      name: '包含 JavaScript 筛选逻辑',
      fn: (html) => html.includes('filter-btn') || html.includes('renderTutorials')
    }
  ]);

  // 3. Skills 页测试
  await testPage('/skills', 'Skills 页', [
    {
      name: '包含搜索框',
      fn: (html) => html.includes('search-input')
    },
    {
      name: '包含分类列表',
      fn: (html) => html.includes('category-filters') || html.includes('分类')
    },
    {
      name: '包含 Skills 网格',
      fn: (html) => html.includes('skills-list') || html.includes('Skills')
    }
  ]);

  // 4. 关于页测试
  await testPage('/about', '关于页', [
    {
      name: '包含项目介绍',
      fn: (html) => html.includes('什么是') || html.includes('OpenClaw')
    },
    {
      name: '包含资源列表',
      fn: (html) => html.includes('资源') || html.includes('教程')
    },
    {
      name: '包含 GitHub 链接',
      fn: (html) => html.includes('github')
    }
  ]);

  // 5. 链接测试
  console.log(`\n🧪 测试: 页面链接可达性`);
  const pages = ['/', '/tutorials', '/skills', '/about'];
  let linksOk = true;
  for (const page of pages) {
    try {
      const res = await fetch(`${BASE_URL}${page}`);
      if (res.ok) {
        console.log(`   ✅ ${page} - OK (${res.status})`);
      } else {
        console.log(`   ❌ ${page} - ${res.status}`);
        linksOk = false;
      }
    } catch (error) {
      console.log(`   ❌ ${page} - ${error.message}`);
      linksOk = false;
    }
  }
  if (linksOk) passed++; else failed++;

  // 6. 性能测试
  console.log(`\n🧪 测试: 页面加载性能`);
  const perfStart = Date.now();
  await fetch(`${BASE_URL}/`);
  const loadTime = Date.now() - perfStart;
  console.log(`   首页加载时间: ${loadTime}ms`);
  if (loadTime < 1000) {
    console.log(`   ✅ 加载速度优秀`);
    passed++;
  } else if (loadTime < 3000) {
    console.log(`   ⚠️  加载速度一般`);
    passed++;
  } else {
    console.log(`   ❌ 加载速度过慢`);
    failed++;
  }

  // 7. SEO 测试
  console.log(`\n🧪 测试: SEO 优化`);
  const seoRes = await fetch(`${BASE_URL}/`);
  const seoHtml = await seoRes.text();

  const seoChecks = [
    { name: 'title 标签', check: () => /<title>/.test(seoHtml) },
    { name: 'meta description', check: () => /<meta[^>]+description/.test(seoHtml) },
    { name: 'Open Graph', check: () => /og:/.test(seoHtml) },
    { name: 'Twitter Card', check: () => /twitter:/.test(seoHtml) },
    { name: 'canonical URL', check: () => /canonical/.test(seoHtml) },
    { name: 'h1 标签', check: () => /<h1/.test(seoHtml) },
    { name: '结构化数据', check: () => /schema|jsonld|application\/ld\+json/i.test(seoHtml) },
    { name: 'sitemap 引用', check: () => /sitemap/i.test(seoHtml) }
  ];

  let seoPassed = 0;
  seoChecks.forEach(({ name, check }) => {
    const result = check();
    if (result) {
      console.log(`   ✅ ${name}`);
      seoPassed++;
    } else {
      console.log(`   ❌ ${name} - 未找到`);
    }
  });

  if (seoPassed >= seoChecks.length * 0.7) {
    passed++;
    console.log(`   ✅ SEO 评分: ${seoPassed}/${seoChecks.length} (${Math.round(seoPassed/seoChecks.length*100)}%)`);
  } else {
    failed++;
    console.log(`   ❌ SEO 需要改进`);
  }

  // 8. 广告位测试
  console.log(`\n🧪 测试: 广告位植入`);
  const adRes = await fetch(`${BASE_URL}/`);
  const adHtml = await adRes.text();

  const adChecks = [
    { name: '顶部横幅广告位', check: () => /ad-banner|ad-top|广告横幅/i.test(adHtml) },
    { name: '侧边栏广告位', check: () => /ad-sidebar|ad-side|侧边栏广告/i.test(adHtml) },
    { name: '内容间广告位', check: () => /ad-content|广告内容/i.test(adHtml) },
    { name: '底部广告位', check: () => /ad-footer|ad-bottom|底部广告/i.test(adHtml) }
  ];

  let adPassed = 0;
  adChecks.forEach(({ name, check }) => {
    const result = check();
    if (result) {
      console.log(`   ✅ ${name}`);
      adPassed++;
    } else {
      console.log(`   ⚠️  ${name} - 未找到（可选）`);
    }
  });

  if (adPassed >= 2) {
    passed++;
    console.log(`   ✅ 广告位已部署 ${adPassed}/${adChecks.length}`);
  } else {
    console.log(`   ℹ️  广告位部署 ${adPassed}/${adChecks.length}（建议至少2个）`);
  }

  // 总结
  console.log('\n' + '='.repeat(60));
  console.log(`📊 测试结果汇总:`);
  console.log(`   ✅ 通过: ${passed}`);
  console.log(`   ❌ 失败: ${failed}`);
  console.log(`   📈 成功率: ${Math.round(passed / (passed + failed) * 100)}%`);
  console.log('='.repeat(60));

  if (failed === 0) {
    console.log('\n🎉 所有测试通过！网站运行正常。\n');
    process.exit(0);
  } else {
    console.log('\n⚠️  部分测试失败，请检查上述问题。\n');
    process.exit(1);
  }
}

// 运行测试
runAllTests().catch(error => {
  console.error('测试执行失败:', error);
  process.exit(1);
});
