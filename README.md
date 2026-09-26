# Eva 智能办公系统产品文档

独立 VitePress 文档站，正文为 Markdown，图片位于 public/。不依赖 Eva 原型运行时或数据库。

## 在线地址

- 主站：https://eva-ai-docs.vercel.app
- 备用站：https://eva-ai-docs.pages.dev
- 源码：https://github.com/labilio/eva-docs（私有仓库）

## 本地编辑

需要 Node.js 22 或更高版本。

```sh
npm ci
npm run dev
```

## 构建与发布

```sh
npm run build
npm run preview
```

Vercel 和 Cloudflare Pages 连接本仓库，生产分支为 main，项目根目录为仓库根目录，构建命令为 npm run build，输出目录为 .vitepress/dist。
修改文档后检查内容、截图和链接，构建通过后提交到 main，由两个平台自动发布。

## 内容结构

- guide/：入门
- personal/：个人工作与 AI 身份
- team/：团队协作
- resources/：资源与连接
- scenarios/：场景实践
- help/：常见问题、术语与版本范围
- .vitepress/config.mts：导航、品牌和搜索

当前内容根据设计原型编写，适用范围见 help/scope.md。公开站点不包含内部编写记录、环境配置或凭据。

## 节省部署额度

- 两个平台只自动部署 main；开发分支在本地预览，完成一批改动后再合入 main。
- Cloudflare Pages 排除 README.md、AGENTS.md、CONTRIBUTING.md、LICENSE、.gitignore、.github/* 和 maintainer/*，这些文件单独变化不触发构建。
- Vercel 保留自动取消旧排队构建；内部说明与网站改动尽量合并成一批推送，减少无效发布。
- 使用纯静态输出和浏览器本地搜索，不引入服务器函数、数据库或付费搜索服务。
- Cloudflare 项目 eva-ai-docs 为当前备用站；旧项目 eva-docs 和 eva-office-docs 已删除，不再保留旧站点。
