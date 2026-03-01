/**
 * Google AdSense 配置
 *
 * 使用说明：
 * 1. 在 Google AdSense 注册账号: https://www.google.com/adsense/
 * 2. 获取你的发布商 ID (格式: pub-xxxxxxxxxxxxxxxx)
 * 3. 将你的发布商 ID 填入下面的 ADSENSE_PUBLISHER_ID
 * 4. 创建广告单元并获取广告单元 ID
 * 5. 在广告位配置中使用对应的广告单元 ID
 */

// 你的 Google AdSense 发布商 ID
export const ADSENSE_PUBLISHER_ID = 'pub-0000000000000000'; // 请替换为你的实际 ID

// 广告单元配置
export const AD_UNITS = {
  // 顶部横幅广告 (728x90)
  'banner-top': {
    'data-ad-client': ADSENSE_PUBLISHER_ID,
    'data-ad-slot': '0000000000', // 请替换为你的广告单元 ID
    'data-ad-format': 'horizontal',
    'data-full-width-responsive': 'true',
    'style': 'display:inline-block;width:728px;height:90px;',
  },

  // 中部横幅广告 (728x90)
  'banner-middle': {
    'data-ad-client': ADSENSE_PUBLISHER_ID,
    'data-ad-slot': '0000000001', // 请替换为你的广告单元 ID
    'data-ad-format': 'horizontal',
    'data-full-width-responsive': 'true',
    'style': 'display:inline-block;width:728px;height:90px;',
  },

  // 侧边栏广告 (300x250)
  'sidebar': {
    'data-ad-client': ADSENSE_PUBLISHER_ID,
    'data-ad-slot': '0000000002', // 请替换为你的广告单元 ID
    'data-ad-format': 'vertical',
    'data-full-width-responsive': 'true',
    'style': 'display:inline-block;width:300px;height:250px;',
  },

  // 内容间广告 (自适应)
  'content': {
    'data-ad-client': ADSENSE_PUBLISHER_ID,
    'data-ad-slot': '0000000003', // 请替换为你的广告单元 ID
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
    'style': 'display:block;',
  },

  // 底部广告 (728x90 或自适应)
  'footer': {
    'data-ad-client': ADSENSE_PUBLISHER_ID,
    'data-ad-slot': '0000000004', // 请替换为你的广告单元 ID
    'data-ad-format': 'horizontal',
    'data-full-width-responsive': 'true',
    'style': 'display:inline-block;width:728px;height:90px;',
  },
};

// 是否启用测试模式（测试模式下显示占位符而非真实广告）
export const ADSENSE_TEST_MODE = true; // 设置为 false 以显示真实广告
