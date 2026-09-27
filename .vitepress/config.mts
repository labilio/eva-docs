import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN', title: 'Eva 智能办公系统', description: 'Eva 智能办公系统产品文档：从个人工作到团队协作。',
  cleanUrls: true,
  srcExclude: ['README.md', 'maintainer/**'],
  head: [['link', { rel: 'icon', href: '/eva.png' }]],
  themeConfig: {
    logo: '/eva.png', siteTitle: 'Eva 智能办公系统',
    nav: [{ text: '使用指南', link: '/guide/introduction' }, { text: '场景实践', link: '/scenarios/supply-chain' }, { text: '常见问题', link: '/help/faq' }],
    sidebar: [
      { text: '开始使用', items: [
        { text: '简介', link: '/guide/introduction' },
        { text: '快速开始', link: '/guide/quickstart' },
        { text: '认识工作界面', link: '/guide/workspace' }] },
      { text: '个人工作', collapsed: false, items: [
        { text: '描述需求与继续追问', link: '/personal/conversations' },
        { text: '结果查看', link: '/personal/results' },
        { text: '对话管理', link: '/personal/organize' },
        { text: '技能', link: '/personal/skills' }] },
      { text: '认识与使用 AI', collapsed: false, items: [
        { text: '我的 Agent', link: '/personal/my-ai' },
        { text: '个人助理', link: '/personal/assistants' },
        { text: '云端分身', link: '/personal/avatars' },
        { text: '数字员工', link: '/resources/digital-employees' },
        { text: 'AI 小队', link: '/personal/squads' }] },
      { text: '团队协作', collapsed: false, items: [
        { text: '项目', link: '/team/projects' },
        { text: '群聊与子区', link: '/team/messages' },
        { text: '通讯录', link: '/team/contacts' }] },
      { text: '资源与连接', collapsed: false, items: [
        { text: '文件库', link: '/resources/files' },
        { text: '连接器', link: '/resources/connections' }] },
      { text: '实践与帮助', items: [
        { text: '从供应链讨论到任务跟进', link: '/scenarios/supply-chain' },
        { text: '常见问题', link: '/help/faq' },
        { text: '术语速查', link: '/help/glossary' },
        { text: '本版手册适用范围', link: '/help/scope' }] }
    ],
    outline: { level: [2, 3], label: '本页目录' },
    search: { provider: 'local', options: { locales: { root: { translations: { button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' }, modal: { displayDetails: '显示详细列表', resetButtonTitle: '清除搜索', backButtonTitle: '关闭搜索', noResultsText: '没有找到相关内容', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } } } },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '返回顶部', sidebarMenuLabel: '文档目录', darkModeSwitchLabel: '外观', lightModeSwitchTitle: '切换浅色', darkModeSwitchTitle: '切换深色',
    footer: { message: 'Eva 智能办公系统产品文档', copyright: '根据 Eva Evolve 设计原型编写' }
  }
})
