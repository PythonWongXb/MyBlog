<!--
 * @Author: your name
 * @Date: 2021-01-26 11:11:32
 * @LastEditTime: 2021-01-26 20:59:33
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
  max-height: 90%
  max-width: 90%
  -webkit-transform: translate(-50%, -50%)
  -moz-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  -o-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  transition: height 1s ease
  transition: top 1s ease
  padding: 15px 30px 15px

.each_page
  background-color: rgba(0,0,0,0.5)
  padding: 0.25rem
  border-radius: 0.5em
  text-shadow: 0 1px 1px #333
  margin-top: 1em
  line-height: 180%
  margin-left: 0.8em
  font-size: 1.4em

  &:hover
    color: #000
    background: #fff

.title
  font-size: 1.3rem
  line-height: 90%
  color: #fefefe
  float: none
  margin: auto
  padding-top: 30px
  text-align: center
  font-weight: bolder
  text-shadow: 0 1px 1px #333
  line-height: 1.5rem

  &:hover
    text-decoration: underline
    cursor: pointer

.subtitle
  text-align: center
  color: #fefefe
  text-shadow: 0 1px 1px #333
  font-size: 1.2em
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
  font-size: 1.2em
  color: #fefefe
  text-shadow: 0 1px 1px #333
  line-height: 220%
  padding-top: 10px

.line
  flex-shrink: 0
  font-weight: bold

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
  padding: 0 10px
  border-radius: 10px

  &:hover
    color: #000
    background: #fff
    text-decoration: underline
    cursor: pointer

.hide_block
  height: 6px
  top: 15px

.rever_arrow
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHZSURBVEiJ7ZQ/ixpRFMXPeY6za7IEbbS1EGysUk0TkFjkI1imShFIioVASJsqW2wT8gW2TSsypBCLBLExEBgQ2cxodDdYKBhHDZv5c1Ooi4juGsIWCXvhNo97fu+++857FBHcVKgbI9/C/z84ROQyAahMJnMvn88fAIgB2AegA4guMrJoiAC4qt2UXPU5yT3DMB6l0+kHmqYpEQkWDTAMw8u6MAxJEiIiSikEQRAdjUY/Go3G8XA4HC/rtLVTXBiG0dR1/XkqlXqo6/rPMAw535cQES67XqxRRCKz2cydTqdPVsHAhpnX6/XTyWTy0nXdLyTvRiKRO0qpGMkYyX0AeyR1klEAmud5F7ZtvyiXy+/XWdz2/AuFwv1sNnsSj8dzMi8iyXBxQkUSnuf5rVbrValUOpYNoK1uqVQqn9vt9tPxePxVKbUcC0SESin4vh82m80jx3HebgJfCQcA0zQ/2bb9zHXdbyRBUiml6Pt+4DjOu06n88ayrF/b9Nf63DTND91u99B13e+apsHzPHEc56TX6722LGtylXbrzNejWCw+TiaTR4PB4GO/3z+sVqtn12l2hudyuYNEImEEQdCs1Wrnu2h2hgNzu2y7vL+G/2n8u7/iLXxj/AYhQQQGkT/xPgAAAABJRU5ErkJggg==")
  cursor: s-resize

.dominan
  margin-left: 5px
  white-space: nowrap
</style>

<template lang="pug">
.inter_face_container(
  :class="{'hide_block': hideBlock}"
)
  .header
    .title(@click="handleClickTitle") {{ homePageBlockModule.title }}
    .subtitle {{ homePageBlockModule.subtitle }}
  .content
    .each_page(
      v-for="item in homePageBlockModule.itemList"
    )
      span {{ '» ' }}
      span.info(@click="handleClickItem(item.url)") {{ item.text }}
  .footer
    .footer_content
      .contact(@click="contactUs") {{ homePageBlockModule.contact }}
      .line |
      .dominan {{ homePageBlockModule.dominan }}
  .arrow_up(
    :class="{'rever_arrow': hideBlock}"
    @click="hideBlock = !hideBlock"
  )
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import * as homePageBlockModule from './../modules/homePageBlock'

@Component
class Block extends Vue {
  homePageBlockModule = homePageBlockModule
  hideBlock = false

  handleClickTitle() {
    this.$emit('nextPic')
  }

  handleClickItem(url) {
    this.$router.push(url)
  }

  contactUs() {
    this.$router.push(this.homePageBlockModule.contactUsUrl)
  }
}

export default Block
</script>
