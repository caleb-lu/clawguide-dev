/**
 * AdSense 配置验证脚本
 * 检查 AdSense 配置是否正确设置
 */

const fs = require('fs');
const path = require('path');

console.log('╔═══════════════════════════════════════════════════════╗');
console.log('║     AdSense 配置检查                                  ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

// 读取配置文件
const configPath = path.join(__dirname, '../src/config/adsense.ts');
let configContent;

try {
  configContent = fs.readFileSync(configPath, 'utf-8');
} catch (error) {
  console.error('❌ 无法读取配置文件:', configPath);
  process.exit(1);
}

// 检查项目
const checks = [
  {
    name: '配置文件存在',
    pass: () => true
  },
  {
    name: '测试模式开启',
    pass: () => {
      const testModeMatch = configContent.match(/ADSENSE_TEST_MODE\s*=\s*(true|false)/);
      if (!testModeMatch) return false;
      const isTestMode = testModeMatch[1] === 'true';
      console.log(`   ℹ️  当前模式: ${isTestMode ? '测试模式（占位符）' : '生产模式（真实广告）'}`);
      return true;
    }
  },
  {
    name: '发布商 ID 格式正确',
    pass: () => {
      const pubIdMatch = configContent.match(/ADSENSE_PUBLISHER_ID\s*=\s*['"]ca-pub-[\d]+['"]/);
      if (!pubIdMatch) {
        console.log(`   ⚠️  发布商 ID 格式不正确，应为: ca-pub-xxxxxxxxxxxxxxxx`);
        return false;
      }
      const pubId = pubIdMatch[0].match(/ca-pub-[\d]+/)[0];
      const isDefault = pubId === 'ca-pub-0000000000000000';
      if (isDefault) {
        console.log(`   ⚠️  仍在使用默认发布商 ID，请替换为你的实际 ID`);
      } else {
        console.log(`   ✅ 发布商 ID: ${pubId}`);
      }
      return true;
    }
  },
  {
    name: '配置了所有广告单元',
    pass: () => {
      const requiredUnits = ['banner-top', 'banner-middle', 'sidebar', 'footer'];
      const missing = [];

      requiredUnits.forEach(unit => {
        if (!configContent.includes(`'${unit}'`)) {
          missing.push(unit);
        }
      });

      if (missing.length > 0) {
        console.log(`   ⚠️  缺少广告单元: ${missing.join(', ')}`);
        return false;
      }
      console.log(`   ✅ 所有广告单元已配置: ${requiredUnits.join(', ')}`);
      return true;
    }
  },
  {
    name: '广告槽位 ID 格式正确',
    pass: () => {
      const slotMatches = configContent.match(/'data-ad-slot':\s*['"](\d+)['"]/g);
      if (!slotMatches || slotMatches.length === 0) {
        console.log(`   ⚠️  未找到广告槽位 ID`);
        return false;
      }

      const hasDefaultSlot = slotMatches.some(slot => slot.includes('0000000000'));
      if (hasDefaultSlot) {
        console.log(`   ⚠️  仍在使用默认槽位 ID，请在 AdSense 创建广告单元并替换`);
        console.log(`   ℹ️  当前配置了 ${slotMatches.length} 个槽位`);
        return false;
      }

      console.log(`   ✅ 已配置 ${slotMatches.length} 个广告槽位`);
      return true;
    }
  },
  {
    name: 'AdBanner 组件存在',
    pass: () => {
      const componentPath = path.join(__dirname, '../src/components/AdBanner.astro');
      return fs.existsSync(componentPath);
    }
  },
  {
    name: 'BaseLayout 包含 AdSense 脚本',
    pass: () => {
      const layoutPath = path.join(__dirname, '../src/layouts/BaseLayout.astro');
      const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      return layoutContent.includes('adsbygoogle');
    }
  }
];

// 运行检查
let passed = 0;
let failed = 0;

checks.forEach(check => {
  const result = check.pass();
  if (result) {
    console.log(`✅ ${check.name}`);
    passed++;
  } else {
    console.log(`❌ ${check.name}`);
    failed++;
  }
});

// 总结
console.log('\n' + '='.repeat(60));
console.log(`📊 检查结果:`);
console.log(`   ✅ 通过: ${passed}`);
console.log(`   ❌ 失败: ${failed}`);
console.log(`   📈 成功率: ${Math.round(passed / (passed + failed) * 100)}%`);
console.log('='.repeat(60));

// 提供下一步建议
console.log('\n📋 下一步操作:\n');

const testModeMatch = configContent.match(/ADSENSE_TEST_MODE\s*=\s*(true|false)/);
const isTestMode = testModeMatch && testModeMatch[1] === 'true';

const pubIdMatch = configContent.match(/ADSENSE_PUBLISHER_ID\s*=\s*['"]ca-pub-[\d]+['"]/);
const isDefaultPubId = pubIdMatch && pubIdMatch[0].includes('0000000000000000');

if (isTestMode || isDefaultPubId) {
  console.log('1. 申请 Google AdSense 账号');
  console.log('   访问: https://www.google.com/adsense/\n');

  console.log('2. 获取发布商 ID 和广告单元 ID');
  console.log('   在 AdSense 控制台创建广告单元\n');

  console.log('3. 更新配置文件');
  console.log('   编辑 src/config/adsense.ts:');
  console.log(`   - ADSENSE_PUBLISHER_ID = 'ca-pub-xxxxxxxxxxxxxxxx'`);
  console.log(`   - 替换所有广告单元的 data-ad-slot`);
  console.log(`   - ADSENSE_TEST_MODE = false\n`);

  console.log('4. 重新构建和部署');
  console.log('   npm run build\n');
} else {
  console.log('✅ 配置已完成！你可以:');
  console.log('   1. 运行 npm run build 构建项目');
  console.log('   2. 部署到生产环境');
  console.log('   3. 在 AdSense 控制台监控广告效果\n');
}

console.log('📚 详细指南: ADSENSE_GUIDE.md');
console.log('📄 快速清单: ADSENSE_QUICKSTART.md\n');

if (failed === 0 && !isTestMode && !isDefaultPubId) {
  console.log('🎉 恭喜！AdSense 配置完成，可以开始投放广告了！\n');
  process.exit(0);
} else {
  console.log('⚠️  请完成上述步骤后重新运行此检查。\n');
  process.exit(1);
}
