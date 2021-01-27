/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-01-27 21:34:59
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
                link: '/JavaScript/'
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
    sidebarDepth: 2,
    sidebar: {
        '/JavaScript/': [
          {
            title: 'Group 1',
            path: '/JavaScript/',
            children: [
              {
                title: '1',
                path: '/JavaScript/one'
              },
              {
                title: '2',
                path: '/JavaScript/'
              }
            ]
          },
          {
            title: 'Group 2',
            path: '/JavaScript/',
            children: [
              '/'
            ]
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