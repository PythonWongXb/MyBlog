/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-02-06 11:54:08
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
              link: '/Python/'
              },
              {
              text: 'Golang',
              link: '/Golang/'
              },
              {
              text: 'Java',
              link: '/Java/'
              }
            ]
          },
        ]
      },
      {
        text: 'Personal Style',
        items: [
          {
            text: 'About Code Quality',
            items: [
              {
                text: 'Bad Codes',
                link: '/PersonalStyle/Code/BadCodes/'
              },
              {
                text: 'Nice Codes',
                link: '/PersonalStyle/Code/NiceCodes/'
              },
            ]
          },
          {
            text: 'Interviews FrontEnd',
            items: [
              {
                text: 'JavaScript',
                link: '/PersonalStyle/Interview/FrontEnd/JavaScript/'
              },
              {
                text: 'CSS',
                link: '/PersonalStyle/Interview/FrontEnd/Css3/'
              },
            ]
          },
          {
            text: 'Interviews Backend',
            items: [
              {
                text: 'GoLang',
                link: '/PersonalStyle/Interview/BackEnd/Golang/'
              },
              {
                text: 'Python',
                link: '/PersonalStyle/Interview/BackEnd/Python/'
              },
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
        '/Golang/': [
          {
            title: 'Golang基础',
            path: '/Golang/#1',
            children: [
              {
                title: '1',
                path: '/Golang/one'
              },
              {
                title: '2',
                path: '/Golang/two'
              },
            ],
          },
          {
            title: 'JavaScript中级',
            path: '/Golang/#2',
            children: [
              '/'
            ]
          },
          {
            title: '基础',
            path: '/Golang/primary/',
            children: [
              {
                title: '并发',
                path: '/Golang/primary/并发'
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