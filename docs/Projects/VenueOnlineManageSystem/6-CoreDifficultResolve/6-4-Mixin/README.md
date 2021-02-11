<!--
 * @Author: your name
 * @Date: 2021-02-10 12:45:06
 * @LastEditTime: 2021-02-11 20:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Projects/VenueOnlineManageSystem/6-CoreDifficultResolve/README.md
-->
# Mixin
::: tip
  为什么用mixin呢？
  因为有大量复用性需求的时候，用mixin能最简单的解决问题
:::
## 1-有什么需要呢？
1. 一个需求是当点击确定按钮跳转下一页的时候，要检查一下当前venue是不是营业状态，如果venue已经关门要跳转到venue-home页面，还要展示对应的venue关门页面。
这里涉及了很多按钮，比如说product-detail页面、cart页面、venue-home页面等。
::: tip
这里实际上是采用了工厂函数与函数柯里化的思想，进行封装了之前的代码逻辑。这样使之前的代码逻辑不变，对代码质量有一定的提升。
:::

```js
async __checkVenueTodayIsOpenTime(fun) {
  this.$store.commit('showLoading')
  const isOpen = await this.__checkVenueOpenTime()
  if (isOpen) {
    fun()
  } else {
    this.__jumpToIndex()
    this.$store.commit('closeLoading')
  }
}
```
2. 还有就是关于餐厅是不是在营业时间的判定，这是要在页面渲染完成的时候就要知道的，这就要求，这个代码需要写在mounte或者created生命周期里，而逻辑代码又是相同的，这样就又进行了一些封装mixin函数

```js
async __checkVenueOpenTime() {
  let res = false
  const {
    week,
    time
  } = this.__getTime()
  console.log(time)
  const venueOperationTime = await this.__getVenueOpenTime()
  console.log(venueOperationTime)
  if (venueOperationTime && venueOperationTime.enable) {
    try {
      if (venueOperationTime.fromHour.trim() && venueOperationTime.toHour.trim()) {
        const fakeHeader = '2020-10-9:'
        const fromHour = fakeHeader + venueOperationTime.fromHour.trim()
        const toHour = fakeHeader + venueOperationTime.toHour.trim()
        const Time = fakeHeader + time
        // 比较
        console.log(Time, fromHour)
        const result = this.__compareBigTimeString(Time, fromHour) && this.__compareBigTimeString(toHour, Time)
        if (result) res = true
      }
    } catch (error) {
      console.log(error)
    }
  }
  this.isVenueOpenTime = res
  return res
}
```

## 2-有什么好处呢
这里的逻辑代码是一模一样的，这样利用mixin可以实现最大的复用性，而且不会丢失this指向

## 3-坏处
1. 同名被覆盖
2. 无法在本文件中找到变量或者函数，造成疑惑
3. 降低了代码可维护性

## 4-解决方案
1. 起一个能识别的名字
  + 变量 => variableMinxin
  + function => __functionName

2. 在Vue调试工具中可以继续调试mixin中的变量