const demo = {
  text: '导航块示例',
  prefix: '/notes/demo/',
  items: [
    {
      text: '导航页面', link: 'markdown文件.md'
    },
    {
      text: '导航标题1',
      prefix: '标题文件夹',
      items: [
        { text: '子标题1', link: 'mkdown文件1.md' },
        { text: '子标题2', link: 'mkdown文件2.md' },
      ],
    },
    {
      text: '导航标题2',
      prefix: '标题文件夹',
      items: [
        { text: '子标题1', link: 'mkdown文件1.md' },
        { text: '子标题2', link: 'mkdown文件2.md' },
      ],
    },
    {
      text: '导航标题3',
      prefix: '标题文件夹',
      items: [
        { text: '子标题1', link: 'mkdown文件1' },
        { text: '子标题2', link: 'mkdown文件2' },
      ],
    },
    {
      text: '导航标题4',
      prefix: '标题文件夹',
      items: [
        { text: '子标题1', link: 'mkdown文件1' },
        { text: '子标题2', link: 'mkdown文件2' },
      ],
    },
  ]
}

export default demo