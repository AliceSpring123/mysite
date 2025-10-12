const toolsDeploy = {
  text: '工具|部署',
  prefix: '/notes/toolsDeploy/',
  items: [
    {
      text: 'Linux', link: '4.Linux/1.Linux基础知识.md'
    },
    {
      text: 'Markdown', link: '1.Markdown.md'
    },
    {
      text: 'Shell', link: '2.Shell脚本.md'
    },
    {
      text: 'Vim', link: '3.Vim.md'
    },
    {
      text: '环境搭建',
      prefix: '5.环境搭建',
      items: [
        { text: '数据分析环境搭建', link: '1.数据分析环境搭建.md' },
        { text: 'Python虚拟环境', link: '2.Python虚拟环境.md' },
        { text: 'PyTorch环境搭建', link: '3.PyTorch环境搭建.md' },
        { text: 'Ubuntu环境快速搭建', link: '4.Ubuntu环境快速搭建.md' },
        { text: 'win10终端代理', link: '5.win10终端设置代理.md' },
      ],
    },
        {
      text: 'CI&CD',
      prefix: '6.CI&CD',
      items: [
        { text: 'Github Actions', link: '1.Github Actions实现自动化部署.md' },
      ],
    },

  ]
}

export default toolsDeploy