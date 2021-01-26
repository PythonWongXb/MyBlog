<!--
 * @Author: your name
 * @Date: 2021-01-26 11:11:32
 * @LastEditTime: 2021-01-26 15:30:36
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
  padding: 15px 30px

.each_page
  background-color: rgba(0,0,0,0.5)
  padding: 0.25rem
  border-radius: 0.5em
  text-shadow: 0 1px 1px #333
  margin-top: 1em
  line-height: 180%
  margin-left: 0.8em
  font-size: 1.6em

  &:hover
    color: #000
    background: #fff

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

  &:hover
    text-decoration: underline
    cursor: pointer

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

.footer
  margin: 0 1em
  border-top: 1px solid #d3d3d3
  color: #d3d3d3
  padding-top: 0
  clear: both
  line-height: 1.2

.footer_content
  display: flex
  justify-content: flex-end
  align-items: center
  font-size: 1.6em
  color: #fefefe
  text-shadow: 0 1px 1px #333
  line-height: 220%

.line
  padding: 0 5px

.arrow_up
  position: absolute
  right: 5px
  top: 5px
  width: 21px
  height: 21px
  background-color: #fefefe
  border-radius: 100%
  cursor: n-resize
  background-image: url(data:image/gif;base64,R0lGODlhFgAVALMAAGNkZuLi44CBg5SVlru8vPb29tjZ2aioqW1ucIqLjOrq6sXFxgAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAWABUAAARBUMlJq7046837LYVnJYlIEQBAmEqQpoEpvIAgHnR6dEb+GpsCwpdChDID4muQWShpi8+ARBUIqKTBkcXter9gUwQAOw==)

.info
  &:hover
    text-decoration: underline
    cursor: pointer

.contact
  padding: 5px
  border-radius: 5px

  &:hover
    color: #000
    background: #fff
    text-decoration: underline
    cursor: pointer
</style>

<template lang="pug">
.inter_face_container
  .header
    .title(@click="handleClickTitle") 阮一峰的个人网站
    .subtitle Ruan Yifeng's Personal Website
  .content
    .each_page(
      v-for="item in itemList"
    )
      span {{ '» ' }}
      span.info {{ item.text }}
  .footer
    .footer_content
      .contact Contact
      .line |
      .dominan ruanyifeng.com
  .arrow_up
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Block extends Vue {
  itemList = [
    {
      text: '网络日志（Blog）',
      url: 'url',
      meta: '说明'
    },
    {
      text: '网络日志（Blog）',
      url: 'url',
      meta: '说明'
    },
    {
      text: '网络日志（Blog）',
      url: 'url',
      meta: '说明'
    }
  ]

  handleClickTitle() {
    this.$emit('nextPic')
  }
}

export default Block
</script>
