<!--
 * @Author: your name
 * @Date: 2021-02-10 12:45:06
 * @LastEditTime: 2021-02-11 14:56:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/README.md
-->
# 6-0-MutipleVenue
如何实现多个餐厅之间购物车互不影响的架构呢，其实很简答，这个过程我们分几步来进行。

## 1-暂存区
```js
// @FilePath: store/index.js
const initState = {
  ...,
  productList = []
}
```
现在这个productList为所有商品的暂存区了，所有添加购物车的商品都会先放在这进行暂存。

## 2-操作暂存区

### 2-1-添加单个product
```js
// 添加新的product
// 在增加product的时候增加判断findSameRecommendFromProductId
addNum(state, product) {
  const index = findSameObj(state.productList, product)
  if (index >= 0) {
    const currentProduct = state.productList[index]
    currentProduct.num = currentProduct.num + product.num
    state.productList.splice(index, 1, {
      ...product,
      num: currentProduct.num,
      recommendFromProductId: currentProduct.recommendFromProductId
    })
  } else {
    state.productList.push({
      ...product
    })
  }
},
```

findSameObj是一个工具函数，用来判断是不是有一样的这种对象在暂存区中
判断条件：
1. 是通过推荐菜进来就直接添加一个新菜
2. 不是通过推荐菜通过判断size与modifications来判断，都要不相同则是一个新菜，否则数量+1

::: details
```js
// 在增加product的时候增加判断findSameRecommendFromProductId
function findSameObj(productList, product) {
  const newProductId = product.id
  const newProductModifications = product.modifications
  const newProductSelectSize = product.selectSize

  if (product.recommendFromProductId) {
    // 如果有fromProductId，那就建立一个新的product在productList
    return -2
  } else {
    // 如果没有fromProductId，就是没有推荐来源
    return productList.findIndex(
      item => ((item.id === newProductId) && isEqualModifications(item.modifications, newProductModifications) && isEqualMutipleSize(item.selectSize, newProductSelectSize))
    )
  }
}
```
:::
### 2-2-删除单个product

```js
// 删除一个商品
deleteGoods(state, {
  product
}) {
  const currentGoodsIndex = findSameObj(state.productList, product)
  if (currentGoodsIndex >= 0 || currentGoodsIndex === -2) {
    state.productList.splice(currentGoodsIndex, 1)
  }
},
```
### 2-3-全部清除当前venueId下的暂存区里面的productList
::: warning
核心架构：除了特殊页面外，所有页面都会从app.vue页面请求getVenue获取venueId，然后保存在Vuex之中，这保证了venueId的在Vuex中的绝对可信赖性。
:::
::: danger
关键是不能将其他venueId下的暂存区内的products删除，这样其实还是需要一个筛选，而且要保留需要保留的内容。
:::

1. 第一步就是保存需要保留的内容
2. 第二步就是将Vuex还原成初始化的state，这里使用了Object.assign方法
3. 恢复需要保留的内容

```js
clearProductList(state) {
  const routerInfo = state.routerInfo
  const navTitle = state.navTitle
  const productList = this.state.productList
  const venueUnpaidOrderList = state.venueUnpaidOrderList
  const color = state.color
  const user = state.user
  Object.assign(state, initState) // 用原数据进行还原
  // 卧槽，一下这行代码太牛了 哦哦哦！
  this.state.productList = productList.filter(item => item.venueId !== state.venueId)
  this.state.routerInfo = routerInfo
  this.state.navTitle = navTitle
  this.state.venueUnpaidOrderList = venueUnpaidOrderList
  this.state.color = color
  this.state.user = user
  localStorage.setItem('orderType', '')
},
```

## 3-format
格式化暂存区里面的productList到接口需要的数据格式，这个过程是在getters里面完成的。

```js {3-15}
    getters: {
      itemList: (state) => (venueId) => {
        const ls = []
        const res = state.productList.map(each => {
          return {
            ...each,
            modifications: each.modifications.filter(e => e.id !== -1)
          }
        })
        res.forEach(item => {
          if (item.venueId === venueId) {
            ls.push(_setProduct(item))
          }
        })
        return ls
      }
    }
```
其中的 _setProduct 是一个format函数，如下
::: details
```js
/**
 * @author Pythonista Wang
 * @overview 对product进行格式重构
 * @param { Object } product
 * @return { Object }
 */

function _setProduct(product) {
  const addList = []
  const removeList = []
  product.modifications.forEach(val => {
    const add = {}
    const remove = {}
    if (!val.removeType) {
      add.type = val.type
      add.name = val.name
      add.items = []
      val.options.forEach((v, i, a) => {
        if (v.checked) {
          add.items.push({
            name: v.name,
            adjustAmount: 1
          })
        }
      })
    } else {
      remove.type = val.type
      remove.name = val.name
      remove.items = []
      val.options.forEach((v, i, a) => {
        if (v.checked) {
          remove.items.push({
            name: v.name,
            adjustAmount: 1
          })
        }
      })
    }
    const isEmptyAdd = add.name && add.type && add.items.length
    const isEmptyRemove = remove.name && remove.type && remove.items.length
    if (isEmptyAdd) {
      addList.push(add)
    }
    if (isEmptyRemove) {
      removeList.push(remove)
    }
  })
  const { index, ...selectSize } = product.selectSize
  return {
    id: null,
    name: product.name,
    no: product.num,
    amount: (parseFloat(product.price) * product.num),
    comment: 'comment',
    rowCost: product.price,
    addList,
    removeList,
    productGroup: product.productGoupId,
    menu: 'menu',
    type: product.type,
    status: product.status,
    venueProductId: product.id,
    isAddItem: product.isAddItem,
    recommendFromProductId: product.recommendFromProductId,
    shortName: product.shortName,
    productGroupCourse: product.productGroupCourse,
    selectSize,
    realProductPrice: product.realProductPrice
  }
}
```
:::

## 4-筛选出符合条件的products

筛选这一步还是通过getters，利用了高级函数（函数柯里化、工厂函数）。

```js {2}
    getters: {
      itemList: (state) => (venueId) => {
        const ls = []
        const res = state.productList.map(each => {
          return {
            ...each,
            modifications: each.modifications.filter(e => e.id !== -1)
          }
        })
        res.forEach(item => {
          if (item.venueId === venueId) {
            ls.push(_setProduct(item))
          }
        })
        return ls
      }
    }
```

## 5-展示与使用
现在已经可以得到了每个venue下的对应的productList。例子如下
+ 向addOrder接口发送数据的时候
```js
  itemList: this.$store.getters.itemList(this.venueId),
```

+ 获取当前金额的时候
```js
  totalAll() {
    return this.$store.getters.realPrice(this.venueId)
  },
```

## 6-其他getter计算
其他价格的计算方式也是大体类似的方式

```js
    // 计算当前总钱
    total: (state) => (venueId) => {
      const ls = state.productList.filter(item => item.venueId === venueId)
      const price = ls.reduce((total, prev) => {
        if (prev.realProductPrice) {
          return total + prev.realProductPrice * prev.num
        } else {
          return total + prev.price * prev.num
        }
      }, 0)
      return parseFloat(price.toFixed(2))
    },

    // 计算手续费 merchantFeePrice
    merchantFeePrice: (state) => (venueId) => {
      const ls = state.productList.filter(item => item.venueId === venueId)
      // 没discount之前price
      const beforeDiscount = parseFloat(ls.reduce((total, prev) => {
        if (prev.realProductPrice) {
          return total + prev.realProductPrice * prev.num
        } else {
          return total + prev.price * prev.num
        }
      }, 0).toFixed(2))

      const merchantFee = state.merchantFee
      const merchantFeePrice = parseFloat((merchantFee * beforeDiscount).toFixed(2))
      return merchantFeePrice
    },

    // 计算真实的应付钱数
    realPrice: (state) => (venueId) => {
      const ls = state.productList.filter(item => item.venueId === venueId)
      // 没discount之前price
      const beforeDiscount = parseFloat(ls.reduce((total, prev) => {
        if (prev.realProductPrice) {
          return total + prev.realProductPrice * prev.num
        } else {
          return total + prev.price * prev.num
        }
      }, 0).toFixed(2))

      const merchantFee = state.merchantFee
      const merchantFeePrice = parseFloat((merchantFee * beforeDiscount).toFixed(2))
      return parseFloat((merchantFeePrice + beforeDiscount).toFixed(2))
    },
```