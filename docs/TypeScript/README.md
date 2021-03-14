---
sidebar: auto
---

# TypeScript
1. 接口与接口之间是继承关系 => extends
2. 类和接口之间是实现的关系 => implements
3. 抽象类 => Abstruct Clas
4. 重载 => callable overloads
5. 泛形 => Generic Type Variables
  + 泛形类
  + 泛形约束
    + format => T extends Lengthwise
  + 泛形接口
  + 函数泛形
  + 多个泛形参数的函数

6. 内置对象
  + Window
  + Document
  + HTMLElement
  + DocumentFragment
  + Event
  + NodeList

## 关键字

## 类型系统
1. 基本注解
2. 基本类型注解
3. 数组注解
4. 接口注解
5. 内联类型注解
6. 特殊类型
7. 泛形
8. 联合类型注解
9. 交叉类型注解
10. 元祖类型
11. 类型别名

## 环境声明
+ 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能

+ 假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 \<script\> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。
::: warning
但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西
:::

```ts
// 这时，我们需要使用 declare var 来定义它的类型
declare var jQuery: (selector: string) => any

jQuery('#foo')
```

一般声明文件都会单独写成一个 xxx.d.ts 文件

创建 01_jQuery.d.ts, 将声明语句定义其中, TS编译器会扫描并加载项目中所有的TS声明文件

declare var jQuery: (selector: string) => any;

很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 [npm包地址](https://www.npmjs.com/package/package) 进行搜索