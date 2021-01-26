<!--
 * @Author: your name
 * @Date: 2021-01-26 11:11:32
 * @LastEditTime: 2021-01-26 11:59:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/components/block.vue
-->
<style scoped lang="sass">
.inter_face_container
  min-width: 40%
  background-color: rgba(0,0,0,0.3)
  border-radius: 1.5em
  color: #fefefe
  overflow: auto
  position: absolute
  left: 50%
  top: 50%
  width: auto
  height: auto
  max-height: 80%
  -webkit-transform: translate(-50%, -50%)
  -moz-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  -o-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  transition: height 1s ease
  transition: top 1s ease
  padding: 30px

.each_page
  background-color: rgba(0,0,0,0.5)
  padding: 0.25rem
  border-radius: 0.5em
  text-shadow: 0 1px 1px #333
  margin-top: 1em
  line-height: 180%
  margin-left: 0.8em
  font-size: 1.6em

.title
  font-size: 1.4rem
  line-height: 90%
  color: #fefefe
  float: none
  margin: auto
  padding-top: 0.4rem
  text-align: center
  font-weight: bolder
  text-shadow: 0 1px 1px #333

.subtitle
  text-align: center
  color: #fefefe
  text-shadow: 0 1px 1px #333
  font-size: 1.6em
  line-height: 220%

.header
  border-bottom: 1px solid #fefefe

.content
  padding: 22.5px 0 15px 0

</style>

<template lang="pug">
.inter_face_container
  .header
    .title 阮一峰的个人网站
    .subtitle Ruan Yifeng's Personal Website
  .content
    .each_page(
      v-for="item in 4"
    ) {{ item }}
  .footer
    .contact contact
    .line
    .dominan ruanyifeng.com

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Block extends Vue {
}

export default Block
</script>
