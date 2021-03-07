<!--
 * @Author: your name
 * @Date: 2021-02-10 09:36:42
 * @LastEditTime: 2021-02-10 16:25:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/0-FileConstruction/0-3-EnvironmentVaries/README.md
-->
# 环境变量
## 特点
+ 文件名为 xxx.env.xxx的形式
+ 注意：属性名必须以VUE_APP_开头，比如VUE_APP_XXX
+ .env 全局默认配置文件，不论什么环境都会加载合并
+ .env.development 开发环境下的配置文件
+ .env.production 生产环境下的配置文件根据启动命令vue会自动加载对应的环境，vue是根据文件名进行加载的，所以上面说“不要乱起名，也无需专门控制加载哪个文件”
+ 比如执行npm run serve命令，会自动加载.env.development文件
```js
// demo
NODE_ENV = production

# just a flag
ENV = 'bugfix'

# 处于哪个环境
VUE_APP_ENV = 'bugfix'

# 接口 base url
VUE_APP_BASE_API = 'https://api-bug.mondomenu.co'

# 管理端端访问 url
VUE_APP_MANAGE_BASE_URL = 'https://manage-bug.mondomenu.co'

# CustomUI base url
VUE_APP_CUSTOM_BASE_URL = 'https://bug.mondomenu.co'

// 使用
console.log(process.env) // 获取环境中配置好的内容
```