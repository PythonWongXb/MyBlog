<!--
 * @Author: your name
 * @Date: 2021-02-09 18:50:38
 * @LastEditTime: 2021-02-10 15:47:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/README.md
-->
# Vuex数据的核心架构
## 知识储备
::: warning
  1. 应该掌握Vuex中的module概念[地址](https://vuex.vuejs.org/zh/guide/mutations.html#mutation)
  2. 应该掌握Vuex中的module的命名空间概念[地址](https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4)
  3. 熟悉mutations与actions的概念[地址](https://vuex.vuejs.org/zh/guide/actions.html#action)
  4. payLoad的概念
:::

## 目录架构
+ store
  - localStorageModules
    + mutations
    + XXX.js
  - modules
    + XXX.js
  - app.js
  - index.js

## 说明
+ 利用插件将Vuex中的文件永久存放在了LocalStorage之中，所以保存在Vuex中的的数据都是永久保存的
+ 其中index.js为入口文件
+ index.js中存在两个自动注册module的函数，会在app实例生成前，自动生成module，并挂载到app实例的protototype中，也就是this.$store上。分别将localStorageModules与modules中的所有js文件自动注册成module。mutations.js文件为所有mutaion的变量存放文件。
+ app.js为所有Vuex中的变量存放与mutations的存放，其实他们理应放在modules之中。

## 这样架构的好处/意义
+ 使对localStorage中的操作追溯，利用vue的调试工具进行跟踪。
+ 自动注册module

## 使用
+ LocalStorage中的mutation
  ```js
      // demo
      this.$store.commit('signUpDialogOnceTime/GET_SIGN_UP_POPUP_ONCE_TIME')
      // 用法展示
      this.$store.commit('js文件名/mutation名字', payLoad)
  ```
+ 非LocalStorage中的mutation
  ```js
      // 用法展示
      this.$store.commit('mutation名字', payLoad)
  ```