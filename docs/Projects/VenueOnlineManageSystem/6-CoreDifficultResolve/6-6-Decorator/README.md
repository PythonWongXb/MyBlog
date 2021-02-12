<!--
 * @Author: your name
 * @Date: 2021-02-12 08:28:08
 * @LastEditTime: 2021-02-12 08:40:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Projects/VenueOnlineManageSystem/8-Decorators/README.md
-->
# 装饰器的使用

::: tip
@文件路径: /frontend-user/src/utils/decorators.js
:::

## 1-目的
+ 避免代码过结构过于混乱，能将try catch语句放置带装饰器函数之中
+ 一般用于Loading的封装

## 2-注意
+ 不要在装饰器函数中使用 promise.then的方式，因为本质上promise.then是同步执行函数，而在装饰器中的async await会导致代码马上就执行结束
+ 装饰器中的异步编程都要使用 async await 的方式进行

## 3-本质
+ 本质上讲，js中的函数是不能使用装饰器函数的，因为函数存在提升。
+ 我们所使用的装饰器，其实本质上来时利用了函数柯里化于工厂函数的概念。

## 4-例子
```js
const loading = (loadingArgName) => (target, name, descriptor) => {
  const fn = descriptor.value
  descriptor.value = async function (...arg) {
    this[loadingArgName] = true
    try {
      await fn.apply(this, arg)
    } catch (error) {
      console.error(error)
    } finally {
      this[loadingArgName] = false
    }
  }
  return descriptor
}
```