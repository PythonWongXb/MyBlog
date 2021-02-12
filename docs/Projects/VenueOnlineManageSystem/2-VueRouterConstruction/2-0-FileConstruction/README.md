<!--
 * @Author: your name
 * @Date: 2021-02-12 14:15:18
 * @LastEditTime: 2021-02-12 14:28:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Projects/VenueOnlineManageSystem/2-VueRouterConstruction/2-0-FileConstruction/README.md
-->
# Router文件结构

## 0-文件结构
+ Router
  - checkin-menu
  - redirect-list
  - tab-admin
  - tab-user
  - index.js

## 1-Router顺序
```js
routes = routes
  .concat(redirectList)
  .concat(tabAdminRouterList)
  .concat(tabUser)
  .concat(checkinMenuRouterList)
  .concat(errorRouterList)
```

## 2-设置mode
```js
// 配置history模式
const router = new VueRouter({
  mode: 'history',
  routes
})
```