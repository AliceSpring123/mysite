/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Eric的知识库',
  description: '千里之行, 始于足下',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({

    blog: false, // 禁用博客
    
    // 社交链接
    social: [
      { icon: 'github', link: 'https://github.com/vuepress-theme-plume' },
    ],

    // 博客文章页面链接前缀
    article: '/article/',

    // 编译缓存，加快编译速度
    cache: 'filesystem',

    //  为 markdown 文件自动添加 frontmatter 配置
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    // 代码高亮
    codeHighlighter: {
       themes: { light: 'everforest-light', dark: 'everforest-dark' },
       lineNumbers:false
      // twoslash: true, // 启用 对 typescript 和 vue 语言的 类型提示 支持
    },

    // markdown增强
    markdown: {
      math: {             // 启用数学公式
        type: 'katex',
      },
      image: {
        figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        mark: true,       // 启用图片标记
        size: true,       // 启用图片大小
      },
    },
    
  }),
})
