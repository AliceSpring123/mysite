const databases =
{
  text: '数据库',
  prefix: '/notes/dataBases/',
  items: [
    {
      text: '数据库基础和原理',
      items: [
        { text: '数据库原理', link: '1.数据库基础和原理/1.关系型数据库是如何工作的.md' },
        { text: 'SQL语言', link: '2.SQL语言/1.SQL语法基础.md' },
      ],
    },

    {
      text: 'SQL数据库',
      prefix: '3.SQL-MySQL',
      items: [
        { text: 'MySQL详解', link: '1.MySQL-数据类型.md' },
      ]
    },

    {
      text: 'NoSQL数据库',
      items: [
        { text: 'Redis详解', link: '4.NoSQL-Redis/1.Redis入门-Redis概念和基础.md' },
        { text: 'MongoDB详解', link: '5.NoSQL-MongoDB/1.Mongo入门-Mongo基础概念.md' },
      ]
    },
  ]
}


export default databases