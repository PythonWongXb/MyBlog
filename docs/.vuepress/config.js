/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-01-23 19:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '.',
  themeConfig: {
    lastUpdated: '最后更新', // string | boolean
    nav: [ // 导航栏配置
      {
        text: '个人主页',
        link: '/accumulate/'
      },
      {
        text: '个人其他',
        link: '/algorithm/'
      },
      {
        text: 'B站',
        link: 'https://baidu.com'
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
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/'
      }
    }
  }
}