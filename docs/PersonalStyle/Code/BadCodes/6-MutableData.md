# 6-MutableData 可变数据

## 函数式编程的理念
::: tip
+ 函数式编程完全建立在数据永不变的理念上。
+ 如果要更新一个数据结构，那就返回一份新的数据副本，旧的数据依然保持不变。
+ 这也是我个人一直坚持的一种理念，但是有时候我们也难免有直接的更新操作在函数中。
:::

::: danger
+ 一句话，尽量避免
:::

```js
// bad codes
function _getVariableNameData() {
  this.data = 1
}

// nice codes
function _getVariableNameData() {
  return 1
}

function _setVariableData(data) {
  this.data = data
}

const tempData = _getVariableNameData()
_setVariableData(tempData)
```
## 定义
::: tip
这里指的可变数据：能从其他地方计算出来的可变数据
:::

## 方案
+ 拆分变量
  + 将其拆分成不同用途的变量，从而避免危险的更新操作

+ 移动语句与提炼函数
  + 尽量把逻辑从更新操作的代码之中搬移出来，将没有副作用的代码与执行数据更新操作的代码分开。

+ 分离
  + 将查询参数与修改函数参数分离，确保调用者不会调用到有副作用的代码，除非真的要进行更新数据。

+ 移除设值函数

