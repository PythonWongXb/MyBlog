<!--
 * @Author: your name
 * @Date: 2021-02-09 18:50:38
 * @LastEditTime: 2021-02-10 12:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/README.md
-->
# 项目文件架构

| 文件夹        | 说明           | 类型  |  重要程度 |
| ------------- |:-------------:| -----| ----- |
| assets      | 关于静态图片的保存 | 静态文件 | 1 |
| icons      | 对svg类型图片的保存，这其中用到了插件，但是现在已经不再继续使用了，基本可以跳过。|   静态文件 | 1 |
| utils | 是存放一些公共Function的文件夹，其中的request.js是对axios的二次封装与统一拦截 | 工具函数 | 6 |
| api | 存放项目中应用到的请求接口函数的文件，是对utils文件夹下的request.js文件返回的一个二次封装     | 接口请求 | 6 |
| modules | 对应页面的专有函数，对应MVVM中的M阶段 | 工具函数 | 1 |
| plugins | 用到的插件 | 插件使用 | 3 |
| style | 全局样式文件 | 全局样式 | 1 |
| components | 所有的公共组件，global下的为自动注册的全局组件 | 项目组件 | 8 |
| router | 所有路由配置的中心，在Router配置中有详细讲解 | 路由配置 | 7 |
| store | Vuex配置中心，在Vuex配置中有详细讲解 | Vuex配置 | 8 |
| views | MVVM中的V所在的位置，也就是路由所对应展示的位置 | 页面展示 | 9 |
| app.vue | 所有view页面的公有页面，通过view-router的动态路由方式。所有的页面跳转只有在这里才能被监听到。在App.vue的说明中有讲解 | 公共页面 | 8 |
| main.js | 项目的入口文件，app的实例在这里生成，插件与自动注册全局组件等在这里运行 | 入口文件 | 3 |
| xx.env | 项目的运行的环境配置文件，会根据packjson中的script不用而载入不同的环境配置文件，可以获取不同的项目baseURL等 | 环境变量 | 1 |