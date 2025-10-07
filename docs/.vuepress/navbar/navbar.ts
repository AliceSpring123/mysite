/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'
import python from './Python'
import framework from './frameWork'
import database from './dataBases'
import toolsDeploy from './toolsDeploy'
import methodology from './methodology'
import data_analysis from './dataAnalysis'
import knowledgebase from './knowledgeBase'
import devops from './devOps'
import webstack from './webStack'

export default defineNavbarConfig([
  python,
  framework,
  webstack,
  database,
  devops,
  data_analysis,
  toolsDeploy,
  methodology,
  knowledgebase,
])
