/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar/navbar'
import notes from './sidebar/sidebar'
import sidebar from './sidebar/sidebar'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  outline: [2, 3], // 页内大纲， 显示h1~h6所有标题
  appearance: true,  // 配置 深色模式
  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  // 允许显示在导航栏的 social 社交链接
  social: [
    { icon: 'github', link: 'https://github.com/AliceSpring123?tab=repositories' },
  ],
  navbarSocialInclude: ['github'], 

  /* 站点页脚 */
  footer: {
    message: '公安网备xxxx | Eric Miller | Released under the MIT License.',
    copyright: 'Copyright © 2024 Eric Miller',
  },

  navbar,
  notes,
  sidebarScrollbar: true,

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: false,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
