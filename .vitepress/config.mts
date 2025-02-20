import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/竹笋-黑.png' }],
  ],
  title: "bmcu wiki",
  description: "bmcu资料整理",
  themeConfig: {
    docFooter: {
      prev: "上一页", //Next page
      next: "下一页", //Previous page
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],
    logo: '/竹笋-黑.png',

    sidebar: [
      {
        text: '制作前',
        items: [
          { text: '什么是bmcu', link: '/doc/prepare/what-is-it' },
          { text: '版本分支', link: '/doc/prepare/versions' },
          { text: '制作前准备', link: '/doc/prepare/prepare' },
        ]
      },
      {
        text: '制作中',
        items: [
          { text: '130制作教程', link: '/doc/build/130' },
        ]
      },
      {
        text: '调试',
        items: [
          { text: '常见问题', link: '/doc/debug/problems' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/at_4061N/BMCU' }
    ]
  }
})
