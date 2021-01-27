/*
 * @Author: your name
 * @Date: 2021-01-27 09:35:29
 * @LastEditTime: 2021-01-27 09:48:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/enhanceApp.js
 */

// 使用异步函数也是可以的
// const primaryColor = '#3eaf7c'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // document.body.style.setProperty('--menu-primary-background-colour', primaryColor)
}