<!--
 * @Author: your name
 * @Date: 2021-02-12 14:15:18
 * @LastEditTime: 2021-02-12 14:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Projects/VenueOnlineManageSystem/2-VueRouterConstruction/2-0-FileConstruction/README.md
-->
# 拦截特定Router
拦截的是pc端兼容的iframe情况

::: warning
[需要了解守卫导航的概念](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AF%BC%E8%88%AA%E5%AE%88%E5%8D%AB)
:::

```js
router.beforeEach((to, from, next) => {
  if (to.path !== '/pc' && isPC && !isIframeEnv) {
    next('/pc?iframeUrl=' + location.href)
  }
  next()
})
```