import { defineNotesConfig } from 'vuepress-theme-plume'
import python from './Python'
import dataBases from './dataBases'
import frameWork from './frameWork'
import toolsDeploy from './toolsDeploy'
import methodology from './methodology'
import dataAnalysis from './dataAnalysis'
import knowledgeBase from './knowledgeBase'
import devOps from './devOps'
import webStack from './webStack'

export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: 'notes',
  link: '/',
  // 在这里添加 note 配置，直接引入子配置文件以符合 theme 类型
  notes: [
    python,
    frameWork,
    dataBases,
    toolsDeploy,
    methodology,
    dataAnalysis,
    knowledgeBase,
    devOps,
    webStack
  ],
})