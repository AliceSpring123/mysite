const toolsDeploy = {
  text: '工具|部署',
  prefix: '/notes/toolsDeploy/',
  items: [
    {
      text: 'Linux', link: '1.Linux/1.Linux基础知识.md'
    },
    {
      text: 'Docker', link: '2.Docker/1.Docker.md'
    },
    {
      text: 'Markdown', link: '4.Markdown.md'
    },
    {
      text: 'Shell', link: '5.Shell脚本.md'
    },
    {
      text: 'Vim', link: '6.Vim.md'
    },
    {
      text: '环境搭建',
      prefix: '3.环境搭建',
      items: [
        { text: '数据分析环境搭建', link: '1.数据分析环境搭建.md' },
        { text: 'Python虚拟环境', link: '2.Python虚拟环境.md' },
        { text: 'PyTorch环境搭建', link: '3.PyTorch环境搭建.md' },
        { text: 'Ubuntu环境快速搭建', link: '4.Ubuntu环境快速搭建.md' },
        { text: 'win10终端代理', link: '5.win10终端设置代理.md' },
      ],
    },
  ]
}

export default toolsDeploy