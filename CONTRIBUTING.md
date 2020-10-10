# Contributing Guide

如果您想要为此项目贡献代码，请参考以下指南：

## 1. Fork You

鉴于您不能直接向我的 `repository` 中 `push` 代码，您可能需要先 `Fork` 项目，再创建一个新分支。

## 2. Project Infrastructure

此项目使用 [`TypeScript`](https://www.typescriptlang.org/) 语言基于 [`Nuxt`](https://nuxtjs.org/) 框架开发，包含其 [`axios`](https://axios.nuxtjs.org/)、[`auth`](https://auth.nuxtjs.org/) 和 [`pwa`](https://pwa.nuxtjs.org/) 模块，前端使用 [`BootstrapVue`](https://bootstrap-vue.org/) 库。您可以参考它们的官方文档进行开发。

## 3. Development Environment

```bash
// 建议使用 Yarn 2，否则无法保证开发环境一致性

yarn  // 安装依赖

yarn dev  // 运行开发服务器
```

## 4. Submit Changes

若要提交代码，请先运行 `yarn lint` 检查代码有没有格式上的错误。

检查无误后，您可以使用 `git` 提交到 `GitHub` 上，然后[创建 Pull Request](https://github.com/JingBh/dig-ol/compare)。
