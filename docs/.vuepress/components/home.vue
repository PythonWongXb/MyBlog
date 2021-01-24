<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2021-01-24 21:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/components/home.vue
-->
<style scoped lang="sass">
.app_container

</style>

<template lang="pug">
.app_container home a
  button(@click="jumpToHome") jumpToHome

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  created() {
    console.log(this.$route.path)
  }
})
class Home extends Vue {
  jumpToHome() {
    // add catch, the reason of promise is the inner logic error of router probably.
    this.$router.push('/home').catch()
  }
}

export default Home
</script>
