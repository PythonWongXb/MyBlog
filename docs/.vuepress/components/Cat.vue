<!--
 * @Author: your name
 * @Date: 2021-01-24 20:09:22
 * @LastEditTime: 2022-05-15 18:33:20
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/components/home.vue
-->
<style scoped lang="sass">

.title
  display: inline-block
  min-width: 80px

.img
  margin-top: 20px

.font
  font-family: Arial,sans-serif
</style>

<style lang="sass"></style>

<template lang="pug">
.app_container_some
  //- .titl.font 咕噜咕噜
  //- .titl.font(style="margin-bottom: 10px;") 宝贝我永远爱你哦～
  .second
    span.title 秒：
    span.content {{ second }}
  .minutes
    span.title 分钟：
    span.content {{ minutes }}
  .day
    span.title 日：
    span.content {{ day }}
  .months
    span.title 月：
    span.content {{ months }}
  .year(v-if="year")
    span.title 年：
    span.content {{ year }}
  .sum
    span.title 总共：
    span.content {{ sum }}
  .img
    img(:src="imgSrc")
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import dayjs from "dayjs";

@Component({
  created() {
    setInterval(() => {
      this.countTime();
    }, 1000);
  },

  mounted() {},

  computed: {
    sum() {
      return this.timeStamp(this.second);
    },
  },
})
class OtherComponent extends Vue {
  second = "";
  minutes = "";
  day = "";
  months = "";
  year = "";
  imgSrc = require('./../public/gulu.jpeg')

  timeStamp(second_time) {
    var time = parseInt(second_time) + "秒";
    if (parseInt(second_time) > 60) {
      var second = parseInt(second_time) % 60;
      var min = parseInt(second_time / 60);
      time = min + "分" + second + "秒";

      if (min > 60) {
        min = parseInt(second_time / 60) % 60;
        var hour = parseInt(parseInt(second_time / 60) / 60);
        time = hour + "小时" + min + "分" + second + "秒";

        if (hour > 24) {
          hour = parseInt(parseInt(second_time / 60) / 60) % 24;
          var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
          time = day + "天" + hour + "小时" + min + "分" + second + "秒";

          if (day > 365) {
            day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24) % 365
            const year = parseInt(parseInt(parseInt(parseInt(second_time / 60) / 60) / 24) / 365)
            time = year + '年' + day + "天" + hour + "小时" + min + "分" + second + "秒";
          }
        }
      }
    }

    return time;
  }

  countTime() {
    const beginLoveTime = dayjs("2022-05-14 17:38:00");
    const date2 = dayjs();
    this.second = date2.diff(beginLoveTime, "second");
    this.minutes = date2.diff(beginLoveTime, "minutes");
    this.day = date2.diff(beginLoveTime, "day");
    this.months = date2.diff(beginLoveTime, "months");
    this.year = date2.diff(beginLoveTime, "year");
  }
}

export default OtherComponent;
</script>
