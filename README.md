# Eva 智能办公系统产品文档

独立 VitePress 文档站，正文为 Markdown，图片位于 public/。不依赖 Eva 原型运行时或数据库。

## 在线地址

- 主站：https://eva-docs-nine.vercel.app
- 备用站：https://eva-docs-2xg.pages.dev
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
