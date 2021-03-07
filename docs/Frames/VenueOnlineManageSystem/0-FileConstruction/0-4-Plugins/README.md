<!--
 * @Author: your name
 * @Date: 2021-02-10 09:37:28
 * @LastEditTime: 2021-02-10 16:15:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/VenueOnlineManageSystem/0-FileConstruction/0-4-Plugins/README.md
-->
# 插件
| 插件名        | 说明           | 用到的pageNames  |
| ------------- |:-------------:| -----|
| VuePaycard   | 银行卡支付相关，作用是双向绑定银行卡信息到视图，并提供一个可视化的银行卡界面，双向绑定实现方式是捕捉DOM中含有对应name字段的input。ios情况下采用这个做input的输入绑定，而在android情况下我们为了避免出现input弹出无效的情况，采用了自定义组件ExpireDateInput来替换expiryDate input的情况。 | card-details、tab-payment、tab-update |
| CreateAPI | 此插件是用来将组件转化为插件的插件，用来实现弹框的效果与Toast这种的封装使用    | Axios的错误拦截、tab的部分页面 |
| vant | 部分引入，大多数情况都进行了二次封装  | 所有页面 |