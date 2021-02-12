<!--
 * @Author: your name
 * @Date: 2021-02-12 12:57:58
 * @LastEditTime: 2021-02-12 13:13:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Projects/VenueOnlineManageSystem/3-AxiosConstruction/3-1-AxiosSetting/README.md
-->
# 1-Axios设置

## 配置axios实例
```js
const baseURL = process.env.VUE_APP_BASE_API
const service = axios.create({
  baseURL,
  method: 'post',
  timeout: 30000 // request timeout
})

service.headers = {
  'Content-Type': 'application/json'
}
```