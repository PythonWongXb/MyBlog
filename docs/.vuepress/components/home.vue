<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2021-01-26 21:28:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/components/home.vue
-->
<style scoped lang="sass">
.app_container
  background-size: cover
  background-repeat: no-repeat
  background-image: url(http://www.ruanyifeng.com/images_pub/pub_0.png)
  background-attachment: fixed
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  background-position: 50% 50%
  margin: 0
  padding: 0
  width: 100%
  height: 100%
  -webkit-transition: All 2s ease
  -moz-transition: All 2s ease
  -o-transition: All 2s ease
  -ms-transition: All 2s ease
  transition: All 2s ease

.demo_img
  height: 100px
  width: 100px
</style>

<style lang="sass">
@import './../styles/sass/common'
.site-name
  padding: 0 15px
  border-radius: 5px

  &:hover
    color: #fff
    background: #3eaf7c
</style>

<template lang="pug">
.app_container(:style="{'background-image': `url(http://www.ruanyifeng.com/images_pub/pub_${currentNumber}.jpg)`}")
  //- img for cache
  img.demo_img(v-show="false" :src="nextSrc")
  home-page-block(
    @nextPic="nextPic"
  )

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  _getRandomInt
} from './../utils/random'
import {
  BEGIN_PAGE_NUMBER,
  END_PAGE_NUMBER,
  INTERVAL_TIME,
} from './../modules/home'

@Component({
  created() {
    this._setRandomPic()
  },

  computed: {
    nextSrc() {
      return `http://www.ruanyifeng.com/images_pub/pub_${this.nextPicNumber}.jpg`
    }
  }
})

class Home extends Vue {
  nextPicNumber = 0
  currentNumber = 0
  timer = null

  _setRandomPic() {
    this.nextPicNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    this.currentNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    this.timer = setInterval(() => {
      this.currentNumber = this.nextPicNumber
      this.nextPicNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    }, INTERVAL_TIME)
  }

  nextPic() {
    if (this.timer) clearInterval(this.timer)
    this.currentNumber = this.nextPicNumber
    this.nextPicNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
  }

  jumpToHome() {
    // add catch, the reason of promise is the inner logic error of router probably.
    this.$router.push('/home').catch()
  }
}

export default Home
</script>
