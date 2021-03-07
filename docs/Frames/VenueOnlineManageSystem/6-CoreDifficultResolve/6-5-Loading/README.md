<!--
 * @Author: your name
 * @Date: 2021-02-10 12:45:06
 * @LastEditTime: 2021-02-12 08:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/README.md
-->
# Loading
::: tip
1. 组件py-loading是存放于app.vue之中的组件
2. 全局Loading是通过控制存放在Vuex中的变量showLoading来控制的
:::

```js
// 开启Loading
this.$store.commit('showLoading)

// 关闭Loading
this.$store.commit('closeLoading)
```