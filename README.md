# 时间菜单

一个可直接发布的静态网页，支持三种模式：

- 下班倒计时
- 纪念日记录
- 点滴生活时间线

## 本地使用

直接打开根目录的 `index.html` 即可。

如果要体验“安装成 App”与离线缓存能力，请使用本地静态服务器访问，例如：

```bash
python3 -m http.server 4173
```

然后打开 `http://localhost:4173`。

## 发布到 GitHub Pages

仓库已经包含 GitHub Pages 自动发布工作流：

- 推送到 `main` 分支后会自动触发部署
- 在 GitHub 仓库中开启 `Settings -> Pages`
- `Build and deployment` 选择 `GitHub Actions`

部署完成后，网站地址通常会是：

`https://zhengsj9.github.io/daojishi/`

发布后，桌面 Chrome / Edge 和安卓浏览器会支持“安装 App”；iPhone / iPad 可以在 Safari 里通过“添加到主屏幕”安装。

## 目录说明

- `index.html`: 页面结构
- `styles.css`: 样式
- `script.js`: 交互逻辑
- `app.webmanifest`: PWA 应用清单
- `sw.js`: 离线缓存与应用壳
- `icons/`: App 图标资源
