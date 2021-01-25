<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2021-01-25 14:29:57
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
</style>

<style lang="sass">
@import './../styles/sass/common'
</style>

<template lang="pug">
.app_container(:style="{'background-image': `url(http://www.ruanyifeng.com/images_pub/pub_${backgroundImg}.jpg)`}")
  button(@click="jumpToHome") jumpToHome

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
    backgroundImg() {
      return this.picNumber
    }
  }
})

class Home extends Vue {
  picNumber = 0

  _setRandomPic() {
    this.picNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    setInterval(() => {
      this.picNumber = _getRandomInt(BEGIN_PAGE_NUMBER, END_PAGE_NUMBER)
    }, INTERVAL_TIME)
  }

  jumpToHome() {
    // add catch, the reason of promise is the inner logic error of router probably.
    this.$router.push('/home').catch()
  }
}

export default Home
</script>
