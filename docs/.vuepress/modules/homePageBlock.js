/*
 * @Author: your name
 * @Date: 2021-01-26 16:33:28
 * @LastEditTime: 2021-01-27 17:00:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/modules/homePageBlock.js
 */

export const title = '二十多岁的老王的个人网站'
export const subtitle = 'Wang XiangBo\'s Personal Website'
export const contact = 'Contact'
export const dominan = 'Pythonista Wong'
export const itemList = [
  {
    text: '网络日志（Blog）',
    url: '/home',
    meta: '说明'
  },
  {
    text: '联系我们',
    url: '/contact',
    meta: '说明'
  },
  {
    text: '关于我们',
    url: '/about',
    meta: '说明'
  }
]
export const contactUsUrl = '/contact'
export const aboutMeUrl = '/me'

export const awaitTime = function (time = 0.1) {
  const msTime = time * 1000
  return new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), msTime)
  })
}
