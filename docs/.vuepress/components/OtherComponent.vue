<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2021-11-07 17:59:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/components/home.vue
-->
<style scoped lang="sass">
.app_container

</style>

<style lang="sass">

</style>

<template lang="pug">
.app_container
  .title 与茜茜宝贝的纪念日
  .second {{ second }}
  .minutes {{ minutes }}
  .day {{ day }}
  .months {{ months }}
  .sum {{ sum }}

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import dayjs from 'dayjs'

@Component({
  created() {
    setInterval(() => {
      this.countTime()
    }, 1000);
  },

  mounted() {
  },

  computed: {
    sum() {
      return this.second
    }
  }
})

class OtherComponent extends Vue {
    second = ''
    minutes = ''
    day = ''
    months = ''

    countTime() {
      const beginLoveTime = dayjs('2021-08-29 21:41:00')
      const date2 = dayjs()
      this.second = date2.diff(beginLoveTime, 'second')
      this.minutes = date2.diff(beginLoveTime, 'minutes')
      this.day = date2.diff(beginLoveTime, 'day')
      this.months = date2.diff(beginLoveTime, 'months')
    }
}

export default OtherComponent
</script>
