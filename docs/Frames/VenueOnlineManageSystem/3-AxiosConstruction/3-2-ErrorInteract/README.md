<!--
 * @Author: your name
 * @Date: 2021-02-12 13:10:59
 * @LastEditTime: 2021-02-12 13:16:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/3-AxiosConstruction/3-2-ErrorInteract/README.md
-->
# 错误拦截

```js
// response interceptor
service.interceptors.response.use(
  response => {
    // 判断是否是下载 pdf 接口
    if (!response.data.data && response.data.type === 'application/pdf') {
      return response.data
    }
    const {
      success,
      error,
      data
    } = response.data

    // error.message
    if (!success) {
      // 失败状态下的拦截与展示
    } else {
      // 成功状态下的拦截与展示
    }
    return data
  },
  error => {
  // 这种情况不会出现
)
```