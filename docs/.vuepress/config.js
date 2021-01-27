/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-01-27 20:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */

module.exports = {
  title: '二十多岁的老王的个人网站',
  description: 'Just playing around',
  base: '/MyBlogDeploy/',
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
                link: '/language/chinese/'
              },
              {
                text: 'Css3',
                link: '/language/japanese/'
              },
              {
                text: 'Html5',
                link: '/language/japanese/'
              }
            ]
          },
          {
            text: 'BackEnd',
            items: [
              {
              text: 'Python',
              link: '/language/chinese/'
              },
              {
              text: 'Golang',
              link: '/language/japanese/'
              },
              {
              text: 'Java',
              link: '/language/japanese/'
              }
            ]
          },
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: {
      '/': [
        {
          title: 'contact',
          path: '/contact',
        },
        {
          title: 'about',
          path: '/about',
        }
      ]
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