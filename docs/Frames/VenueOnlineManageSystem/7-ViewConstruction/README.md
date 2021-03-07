<!--
 * @Author: your name
 * @Date: 2021-02-09 18:50:38
 * @LastEditTime: 2021-02-12 11:39:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/Frames/README.md
-->
# 1-ViewConstruction
View的分类大致有一下几类，以表格的形式列出：
| 类别名        | 说明           | 文件位置 |
| ------------- |:-------------:| -----|
| tab-user     | tab相关业务中，用户自己使用的tabPay支付、自己建立tab、tab特定的Order成功页面 | views -> tab-user  |
| tab-admin     | tab相关业务中，通知管理后台建立tab，并通过发送邮件告知tab管理者的相关业务    | views -> tab-admin  |
| checkIn | 连接一个澳洲项目第三方的一个系统所涉及的页面，可能由餐厅主页跳转过去      | views -> checkin-menu  |
| PC | 兼容PC端的页面展示，用到了iframe的方式     |  views -> pc  |
| VenueGrounp | 所有餐厅的列表页面      |  views ->  venue-grounp  |
| 错误页面 | 页面出现错误时展示的页面     |  views -> error  |
| 其他正常页面 | 其他正常用户进行非tab支付的相关页面      |  views ->  除去以上情况的其他页面  |