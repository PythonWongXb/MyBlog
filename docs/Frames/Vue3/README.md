---
sidebar: auto
---

# Vue3

## Global API
+ 全局 Vue API 已更改为使用应用程序实例
+ 全局和内部 API 已经被重构为可 tree-shakable

## 模板指令


### v-model
+ 非兼容：用于自定义组件时，v-model prop 和事件默认名称已更改：
+ prop：value -> modelValue；
+ event：input -> update:modelValue；
+ 非兼容：v-bind 的 .sync 修饰符和组件的 model 选项已移除，可用 v-model 作为代替；
+ 新增：现在可以在同一个组件上使用多个 v-model 进行双向绑定；
+ 新增：现在可以自定义 v-model 修饰符。

::: tip
+ 自定义修饰符
+ 对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"：
```js
    <my-component v-model:foo.capitalize="bar"></my-component>
    app.component('my-component', {
    props: ['foo', 'fooModifiers'],
    template: `
        <input type="text"
        :value="foo"
        @input="$emit('update:foo', $event.target.value)">
    `,
    created() {
        console.log(this.fooModifiers) // { capitalize: true }
    }
    })
```
:::
