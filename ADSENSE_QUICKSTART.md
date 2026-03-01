# Google AdSense 快速设置清单

## ✅ 已完成的工作

### 1. 代码集成
- [x] 创建 AdSense 配置文件 (`src/config/adsense.ts`)
- [x] 更新 AdBanner 组件支持 AdSense
- [x] 在 BaseLayout 中添加 AdSense 脚本
- [x] 配置广告位：
  - [x] 顶部横幅 (banner-top)
  - [x] 中部横幅 (banner-middle)
  - [x] 侧边栏 (sidebar)
  - [x] 底部 (footer)

### 2. 广告位布局
| 位置 | 页面 | 广告类型 |
|------|------|----------|
| 顶部 | 首页 | 728x90 横幅 |
| 中部 | 首页 | 728x90 横幅 |
| 侧边栏 | 教程/Skills页 | 300x250 矩形 |
| 底部 | 所有页面 | 728x90 横幅 |

### 3. 测试验证
- [x] 自动化测试通过 (100%)
- [x] 广告位占位符显示正常
- [x] 测试模式下不加载 AdSense 脚本

## 📋 需要你完成的步骤

### 第 1 步：申请 Google AdSense

1. 访问 https://www.google.com/adsense/
2. 点击"开始使用"
3. 添加网站: `https://clawguide.dev`
4. 验证网站所有权
5. 等待审核通过 (1-2周)

### 第 2 步：获取 AdSense ID

审核通过后：
1. 登录 AdSense 控制台
2. 获取发布商 ID: `ca-pub-xxxxxxxxxxxxxxxx`
3. 创建广告单元并获取 ID

### 第 3 步：更新配置

编辑 `src/config/adsense.ts`：

```typescript
// 1. 替换发布商 ID
export const ADSENSE_PUBLISHER_ID = 'ca-pub-xxxxxxxxxxxxxxxx';

// 2. 替换广告单元 ID
export const AD_UNITS = {
  'banner-top': {
    'data-ad-client': 'ca-pub-xxxxxxxxxxxxxxxx',
    'data-ad-slot': '1234567890', // 替换实际 ID
    // ...
  },
  // ... 替换所有广告单元的 ID
};

// 3. 关闭测试模式
export const ADSENSE_TEST_MODE = false; // ← 重要！
```

### 第 4 步：重新构建和部署

```bash
npm run build
# 部署到生产环境
```

### 第 5 步：验证广告显示

1. 清除浏览器缓存
2. 访问网站各个页面
3. 检查广告是否显示
4. 等待 10-20 分钟让 AdSense 系统更新
5. 在 AdSense 控制台查看报告

## ⚠️ 重要注意事项

### 测试模式
当前设置为测试模式 (`ADSENSE_TEST_MODE = true`)，显示占位符而非真实广告。

**生产环境必须设置为 `false`**

### AdSense 政策
- ❌ 不点击自己的广告
- ❌ 不诱导他人点击
- ❌ 不修改广告代码
- ✅ 确保网站有足够原创内容
- ✅ 符合内容政策

## 📊 预期收益

### 影响因素
1. **流量**: 每日访问量
2. **CTR**: 点击率 (通常 0.5-2%)
3. **CPC**: 每次点击费用 (因行业而异)
4. **RPM**: 千次展示收益

### 优化建议
- 定期更新内容
- 优化 SEO 提高排名
- 提升用户体验
- 测试不同广告位置

## 📁 相关文件

| 文件 | 用途 |
|------|------|
| `src/config/adsense.ts` | AdSense 配置 |
| `src/components/AdBanner.astro` | 广告组件 |
| `src/layouts/BaseLayout.astro` | AdSense 脚本 |
| `ADSENSE_GUIDE.md` | 详细指南 |
| `tests/automation-test.js` | 自动化测试 |

## 🆘 遇到问题？

### 广告不显示
1. 检查 `ADSENSE_TEST_MODE` 是否为 `false`
2. 清除浏览器缓存
3. 检查 AdSense 控制台状态
4. 等待 20-30 分钟

### 收入为 0
- 正常现象，新站需要时间
- 继续优化内容和 SEO
- 提高网站流量

### 需要帮助
查看详细指南: `ADSENSE_GUIDE.md`
或访问: https://support.google.com/adsense

---

**下一步**: 申请 AdSense 账号 → 获取 ID → 更新配置 → 部署生产环境

祝你的网站变现成功！🎉
