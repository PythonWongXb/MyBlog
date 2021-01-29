/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-01-29 21:47:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */

module.exports = {
  title: '二十多岁的老王的个人网站',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    lastUpdated: '最后更新', // string | boolean
    nav: [
      {
        text: 'Code Languages',
        items: [
          {
            text: 'FrontEnd',
            items: [
              {
                text: 'JavaScript',
                link: '/JavaScript/'
              },
              {
                text: 'Css3',
                link: '/language/Css3/'
              },
              {
                text: 'Html5',
                link: '/language/Html5/'
              }
            ]
          },
          {
            text: 'BackEnd',
            items: [
              {
              text: 'Python',
              link: '/language/Python/'
              },
              {
              text: 'Golang',
              link: '/language/Golang/'
              },
              {
              text: 'Java',
              link: '/language/Java/'
              }
            ]
          },
        ]
      },
      {
        text: 'About Me',
        items: [
          {
            text: 'My Teaching Videos',
            items: [
              {
                text: 'Bilibili',
                link: 'https://space.bilibili.com/309430466/'
              },
            ]
          },
          {
            text: 'Souce Codes',
            items: [
              {
                text: 'GitHub(GayHub) - Home',
                link: 'https://github.com/PythonWongXb'
              },
            ]
          },
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: {
        '/JavaScript/': [
          {
            title: 'JavaScript基础',
            path: '/JavaScript/#1',
            children: [
              {
                title: '1',
                path: '/JavaScript/one'
              },
              {
                title: '2',
                path: '/JavaScript/two'
              },
            ],
          },
          {
            title: 'JavaScript中级',
            path: '/JavaScript/#2',
            children: [
              '/'
            ]
          },
          {
            title: '算法',
            path: '/JavaScript/algorithm',
            children: [
              {
                title: 'fibo',
                path: '/JavaScript/algorithm/fibonacci'
              }, ]
          },
        ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/'
      }
    }
  },
}