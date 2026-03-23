# 时间菜单

一个可直接发布的静态网页，支持三种模式：

- 下班倒计时
- 纪念日记录
- 点滴生活时间线

## 本地使用

直接打开根目录的 `index.html` 即可。

## 发布到 GitHub Pages

仓库已经包含 GitHub Pages 自动发布工作流：

- 推送到 `main` 分支后会自动触发部署
- 在 GitHub 仓库中开启 `Settings -> Pages`
- `Build and deployment` 选择 `GitHub Actions`

部署完成后，网站地址通常会是：

`https://zhengsj9.github.io/daojishi/`

## 目录说明

- `index.html`: 页面结构
- `styles.css`: 样式
- `script.js`: 交互逻辑
