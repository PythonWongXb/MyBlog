<!--
 * @Author: your name
 * @Date: 2021-02-12 14:15:18
 * @LastEditTime: 2021-02-12 14:33:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/2-VueRouterConstruction/2-0-FileConstruction/README.md
-->
# Router文件结构

## 0-文件结构
+ Router
  - checkin-menu
  - redirect-list
  - tab-admin
  - tab-user
  - index.js

::: tip
index.js 为核心的router配置文件，其他文件夹都是储存配置，都被引入到index.js之中
:::

```js
// @FilePath: /frontend-user/src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import { widthOfDeviceIsMobile } from 'utils'

import { tabAdminRouterList } from './tab-admin'
import tabUser from './tab-user'
import { redirectList } from './redirect-list'
import { checkinMenuRouterList } from './checkin-menu'

Vue.use(VueRouter)
```

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