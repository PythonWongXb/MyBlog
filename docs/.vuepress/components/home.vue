<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2021-01-24 21:14:12
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
    this.$router.push('/home')
  }
}

export default Home
</script>
