<!--
 * @Author: your name
 * @Date: 2021-02-12 13:10:59
 * @LastEditTime: 2021-02-12 14:09:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/3-AxiosConstruction/3-2-ErrorInteract/README.md
-->
# 错误展示
::: tip
  1. 错误拦截统一使用错误码拦截，错误码在Error中的Message字段中
  2. 错误展示使用错误码对应的错误弹框进行展示
  3. 错误拦截有vant框架自带的Toast插件与自己封装的MessageDialog插件进行展示，MessageDialog插件提供了$props与$event接口，与使用普通的组件并无不同
  ```js
    // MessageDialog插件
    MessageDialog.$create({
      $props: message,
      $events: {
        click() {
          jumpToUpdatePage()
        }
      }
    }).show()

    // Toast插件
    Toast(error.message)
  ```
:::

## 失败展示
::: warning
核心：要return一个失败的Promise
:::
::: details
```js
      // 如果是 tab 相关的接口，单独拦截
      if (TAB_URL_LIST.find(item => response.request.responseURL.includes(item))) {
        const code = error.message
        const message = MessageDict[code]
        if (message && !message.custom) {
          MessageDialog.$create({
            $props: message,
          }).show()
        }
        return Promise.reject(code)
      }

      // If the type is form, then each name in this object is the name of the form element, and the value is the error message
      if (specialInteractList.find(item => response.request.responseURL.includes(item))) {
        if (router.currentRoute.name === 'start-tab') {
          let code
          if (error.message === 'tab_insufficient_fund') {
            code = error.message
          } else {
            code = 'othersStartTabError'
          }
          const message = MessageDict[code]
          if (message && !message.custom) {
            MessageDialog.$create({
              $props: message,
            }).show()
          }
        } else {
          // 卫语句
          // 如果是tab_not_start，需要返回tabOpenTime，这个字段在error的tabOpenTime field中
          if (error.message === 'tab_not_start') {
            return Promise.reject(error)
          } else if (error.message === 'tab_insufficient_fund') {
            const code = 'tab_insufficient_fund_increase_tab'
            const message = MessageDict[code]
            if (message && !message.custom) {
              MessageDialog.$create({
                $props: message,
              }).show()
            }
          } else {
            Toast(error.message || error)
          }
        }
        return Promise.reject(error.message || error)
      }
      if (error && error.type === 'form') {
        if (error.info.length) {
          Toast(error.info[0])
        } else {
          Toast(error.message)
        }
        handleErrorPage(response.config.url)
        return Promise.reject(error.info.length ? error.info : error.message)
      } else if (error) {
        Toast(error.message || error)
      }
      return Promise.reject(error)
```
:::

## 成功展示
::: warning
核心：要return data
:::
::: details
```js
      // 需求：
      // 当前端customer访问tab的时候，tab的payment status是pending error的话，显示insufficient fund那个popup，直到用户关闭，关闭后自动进入修改信息页面并且可修改信用卡信息
      // 成功则判断 /get-tab-detail 并且 接口的payment status 等于6 (isPendingErrorPaymentStatus)
      const tabDetailUrl = '/customer/default/get-tab-detail'
      const isTabDetailAPI = response.config.url === tabDetailUrl
      const isPendingErrorPaymentStatus = response.data.data.paymentStatus === 6
      const isTabOpening = response.data.data.paymentStatus === 3
      if (isTabDetailAPI) {
        if (isPendingErrorPaymentStatus) {
          const message = MessageDict.tab_insufficient_fund_payment
          MessageDialog.$create({
            $props: message,
            $events: {
              click() {
                jumpToUpdatePage()
              }
            }
          }).show()
        } else if (isTabOpening) {
          // 需求
          // 这个页面是当tab已经open了的话是不能修改的，或者paymentStatus是pending的话也就是3的话，是不能修改的。
          // 但是当我手动刷新这个页面，是无视tab状态依旧可以修改的，虽然会报错。但是希望如果tab 状态不对应的话，应该自动返回主页面
          if (router.currentRoute.name === 'tab-update') {
            const message = MessageDict.tab_is_open
            MessageDialog.$create({
              $props: message,
              $events: {
                click() {
                  jumpToMenu()
                }
              }
            }).show()
          }
        }
      }
    }
    return data
```
:::