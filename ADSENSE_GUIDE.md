# Google AdSense 集成指南

本指南将帮助你完成 Google AdSense 的申请和集成。

## 📋 前置要求

1. 拥有 Google 账号
2. 网站已部署到公开域名（不能是 localhost）
3. 网站有足够的原创内容

## 🚀 第一步：申请 Google AdSense

### 1. 访问 AdSense
访问 https://www.google.com/adsense/ 并点击"开始使用"

### 2. 添加网站
- 输入你的网站 URL: `https://clawguide.dev`
- 选择语言: 中文/英文
- 确认邮箱

### 3. 连接到网站
Google 会给你一个 HTML 文件或 meta 标签来验证网站所有权。

**验证文件示例：**
```html
<meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxxx" />
```

将此标签添加到 `src/layouts/BaseLayout.astro` 的 `<head>` 部分。

### 4. 填写申请信息
- 账号类型: 个人/企业
- 地址信息: 真实地址（会邮寄 PIN 码）
- 支付方式: 电汇或其他

### 5. 等待审核
通常需要 1-2 周时间。

## ⚙️ 第二步：获取 AdSense 代码

审核通过后：

### 1. 找到你的发布商 ID
在 AdSense 控制台左侧菜单点击 **账号** → **信息**，你会看到：
```
ca-pub-xxxxxxxxxxxxxxxx
```

### 2. 创建广告单元

#### 方法 A：自动广告（推荐）
AdSense 会自动在你的网站放置合适的广告。

#### 方法 B：手动广告单元

1. 点击 **广告** → **摘要**
2. 点击 **➜ 创建广告单元**
3. 选择广告类型：
   - **展示广告**: 适合横幅、侧边栏
   - **信息流广告**: 适合内容之间
   - **文章内广告**: 适合文章内部
   - **原生广告**: 与内容融合

4. 配置广告尺寸和样式
5. 获取广告单元 ID（data-ad-slot）

## 🔧 第三步：配置网站

### 1. 更新 AdSense 配置

编辑 `src/config/adsense.ts`：

```typescript
// 替换为你的实际发布商 ID
export const ADSENSE_PUBLISHER_ID = 'ca-pub-xxxxxxxxxxxxxxxx';

// 将测试模式关闭
export const ADSENSE_TEST_MODE = false;
```

### 2. 更新广告单元 ID

在 `src/config/adsense.ts` 中，为每个广告位填入你的广告单元 ID：

```typescript
export const AD_UNITS = {
  'banner-top': {
    'data-ad-client': 'ca-pub-xxxxxxxxxxxxxxxx',
    'data-ad-slot': '1234567890', // 替换为你的 ID
    // ...
  },
  // ...
};
```

### 3. 重新构建和部署

```bash
npm run build
# 然后部署到你的托管平台
```

## 📊 第四步：监控和优化

### AdSense 控制台

登录 https://www.google.com/adsense/ 查看：
- **收入报告**: 每日/每周/每月收入
- **广告效果**: CTR, CPC, RPM 等指标
- **页面报告**: 哪些页面收入最高
- **广告单元**: 哪个广告位效果最好

### 优化建议

1. **广告位置**
   - 顶部横幅: 曝光率高，适合 CPM
   - 内容之间: 点击率高，适合 CPC
   - 侧边栏: 稳定收入，适合长期展示
   - 底部: 收益较低，但提升覆盖率

2. **广告尺寸**
   - 728x90: 顶部横幅标准
   - 300x250: 侧边栏最常用
   - 300x600: 侧边栏大尺寸
   - 自适应: 移动端友好

3. **颜色方案**
   - 与网站配色协调
   - 避免过于突兀

4. **页面内容**
   - 定期更新内容
   - 优化 SEO 增加流量
   - 提高用户停留时间

## ⚠️ 常见问题

### 1. 广告不显示
- 检查 `ADSENSE_TEST_MODE` 是否为 `false`
- 清除浏览器缓存
- 等待 10-20 分钟让 AdSense 系统更新
- 检查浏览器控制台是否有错误

### 2. 收入为 0
- 正常现象，新站需要时间积累
- 继续优化内容和 SEO
- 提高网站流量

### 3. 广告位置不当
- 使用 AdSense 的实验功能测试不同位置
- 查看各广告位的效果报告
- 调整广告位类型和尺寸

### 4. 移动端广告
- 使用响应式广告单元
- 测试不同设备上的显示效果
- 考虑使用锚定广告

## 📈 AdSense 政策

### 必须遵守：
- ✅ 不点击自己的广告
- ✅ 不诱导他人点击广告
- ✅ 不修改广告代码
- ✅ 网站有原创内容
- ✅ 符合内容政策（无违法、成人、暴力内容）

### 禁止行为：
- ❌ 点击欺诈
- ❌ 付费流量刷广告
- ❌ 隐藏广告
- ❌ 误引导点击

## 🔄 广告位布局总结

当前网站的广告位布局：

| 广告位 | 类型 | 尺寸 | 位置 | 文件 |
|--------|------|------|------|------|
| 顶部横幅 | banner-top | 728x90 | 首页顶部 | `index.astro` |
| 中部横幅 | banner-middle | 728x90 | 首页中部 | `index.astro` |
| 侧边栏 | sidebar | 300x250 | 教程/Skills页侧边栏 | `tutorials.astro`, `skills.astro` |
| 底部广告 | footer | 728x90 | 所有页面底部 | `BaseLayout.astro` |

## 🎯 下一步

1. **申请 AdSense 账号**（如果还没有）
2. **验证网站所有权**
3. **创建广告单元并获取 ID**
4. **更新配置文件**
5. **测试广告显示**
6. **监控效果并优化**

祝你的 AdSense 收入节节高！🎉

---

**相关文档：**
- [Google AdSense 官方帮助](https://support.google.com/adsense)
- [AdSense 政策中心](https://support.google.com/adsense/answer/48182)
