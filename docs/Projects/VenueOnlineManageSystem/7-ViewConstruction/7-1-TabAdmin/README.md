<!--
 * @Author: your name
 * @Date: 2021-02-09 18:50:38
 * @LastEditTime: 2021-02-12 11:44:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Projects/README.md
-->
# TabAdmin
::: warning
tab-input-info也是采用了嵌套路由的方式完成的
```pug{6}
//- @FilePath: /frontend-user/src/views/tab-admin/tab-input-info/index.vue
<template lang="pug">
.app_container
  .img_container
    img.img(:src="imgSrc")
  router-view(
    v-model="loading"
    :show-tab-dialog.sync="showTabDialog"
    :show-tab-dialog-type.sync="showTabDialogType"
    :tab-payment="tabPayment"
    :tab-detail="tabDetail"
    :tab-info="tabInfo"
    :old-payment-detail="oldPaymentDetail"
    :disabled-payment-input="disabledPaymentInput"
    :has-token="hasToken"
    @enablePaymentInput="enablePaymentInput"
  )
  py-loading(:showLoading="loading")
</template>
```
:::
## 1-tab-history

## 2-tab-input-info
+ 嵌套路由
### 2-1-tab-code

### 2-2-tab-info

### 2-3-tab-payment

## 3-tab-menu

## 4-tab-order

## 5-tab-update
