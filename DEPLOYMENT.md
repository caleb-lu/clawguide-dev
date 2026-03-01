# 🚀 GitHub Pages 部署指南

## ✅ 部署已完成！

你的网站正在自动部署到 GitHub Pages...

## 📊 部署状态

### 查看部署进度

1. 访问你的 GitHub 仓库：
   ```
   https://github.com/caleb-lu/clawguide-dev
   ```

2. 点击顶部的 **"Actions"** 标签页

3. 你会看到工作流正在运行（通常需要 1-2 分钟）

4. 等待绿色的 ✅ 对勾出现

## 🌐 访问网站

部署完成后，你的网站将在这里：

```
https://caleb-lu.github.io/clawguide-dev/
```

**注意**：首次部署可能需要几分钟才能访问，请耐心等待。

## 🔄 自动部署

从现在开始，每次你推送代码到 `main` 分支时，网站会**自动重新部署**！

```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push origin main

# 网站会自动更新！
```

## 📱 测试网站

部署完成后，测试这些页面：

- ✅ 首页: `/` 或 `/index.html`
- ✅ 教程页: `/tutorials/`
- ✅ Skills 页: `/skills/`
- ✅ 关于页: `/about/`

## 🛠️ 部署配置

### GitHub Actions Workflow

文件位置：`.github/workflows/deploy.yml`

这个文件定义了：
1. 自动构建 Astro 项目
2. 部署到 GitHub Pages
3. 每次推送自动触发

### Astro 配置

文件位置：`astro.config.mjs`

关键配置：
- `base: '/clawguide-dev'` - 子路径配置
- `site: 'https://clawguide.dev'` - 网站域名

## 🌟 自定义域名（可选）

如果你想使用自己的域名：

1. 在你的域名注册商添加 DNS 记录：
   ```
   类型: CNAME
   名称: clawguide（或你的子域名）
   值: caleb-lu.github.io
   ```

2. 在仓库中创建 `CNAME` 文件：
   ```bash
   echo "your-domain.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. 在 GitHub 仓库设置中配置域名：
   - Settings → Pages → Custom domain

## 📈 监控和调试

### 查看部署日志

1. 访问 Actions 页面
2. 点击最新的工作流
3. 点击 "build" 或 "deploy" 步骤
4. 查看详细日志

### 常见问题

**Q: 网站显示 404**
- 等待几分钟让 CDN 更新
- 检查 Actions 是否成功完成

**Q: 样式不加载**
- 检查 `base` 路径配置
- 清除浏览器缓存

**Q: 部署失败**
- 查看 Actions 日志
- 检查构建错误信息

## 🎯 下一步

1. **等待部署完成**（1-2 分钟）
2. **访问网站**：https://caleb-lu.github.io/clawguide-dev/
3. **分享链接**：发送给朋友或发布到社交媒体
4. **继续开发**：修改代码后 `git push` 即可自动更新

## 💡 提示

- GitHub Pages 是**完全免费**的
- 支持**自定义域名**
- **自动 HTTPS** 证书
- **全球 CDN** 加速
- **无限流量**

---

**部署状态监控**：https://github.com/caleb-lu/clawguide-dev/actions

**网站地址**：https://caleb-lu.github.io/clawguide-dev/

祝你的网站成功上线！🎉
