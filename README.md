# Eva 智能办公系统产品文档

Eva 智能办公系统的产品使用文档。正文使用 Markdown 编写，由 VitePress 生成静态网站。

- [阅读文档](https://eva-ai-docs.vercel.app/)
- [备用地址](https://eva-ai-docs.pages.dev/)

## 本地预览

需要 Node.js 22 或更高版本。

```sh
npm ci
npm run dev
```

提交前运行 `npm run build`，检查修改过的页面、站内链接和配图。可用 `npm run preview` 查看构建结果。

## 文档目录

- `guide/`：入门与工作界面
- `personal/`：个人工作与 AI 身份
- `team/`：项目、群聊、子区与消息
- `resources/`：文件库与连接器
- `help/`：常见问题与术语
- `public/images/`：文档配图
- `.vitepress/config.mts`：导航、搜索与站点配置

## 发布

`main` 是发布分支。文档通过 GitHub 分别连接 Vercel 和 Cloudflare Pages；推送到 `main` 后，两处站点自动构建。构建命令为 `npm run build`，输出目录为 `.vitepress/dist`。文档站为纯静态页面，不需要数据库或应用服务器。

`maintainer/` 保存编写记录与截图规则，不参与网站构建；该目录和 Git 历史仍可在公开仓库中查看。
