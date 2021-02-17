/*
 * @Author: your name
 * @Date: 2021-01-25 14:27:14
 * @LastEditTime: 2021-02-17 21:36:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/modules/home.js
 */

const BEGIN_PAGE_NUMBER = 1
const END_PAGE_NUMBER = 335
const INTERVAL_TIME = 3000
const _getRandomRgba = function() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var a = 1
  const max = Math.max(...[r, g, b, a])
  if (max < 70) {
    _getRandomRgba()
  } else {
    return `rgba(${[r, g, b, a].join(',')})`
  }
}

const MY_OWN_MUSIC_LIST = [
  {
    src: 'http://tx.stream.kg.qq.com/szkge-btfs/3725e5b10fe1f3e092c5e9d491bd5af94179a1df?ftnrkey=f66d7fc7241b76cd95b78ee3dd11165a12da947cf2550ced9ceda9cf246431e72f3495f717722dce0c1ce1293ba43171e415b26e6a3a5d122431c01e194a8432&amp;vkey=1B803D5A65ACDF28D380718D6DF2803C6E4A9122DCB4628194DFAA8FE9DC7F5632376F890383317FBE51712B1246E70857945F154819C5A76789C7AF548B11AC4A02757DECF56647151F2FBFB5F411E5EF1B8548811C589D&amp;fname=1021_98c38bd55448d8b9547e47ef80f999fc7081dbad.0.m4a&amp;fromtag=1006&amp;sdtfrom=v1006&amp;ugcid=48190785_1613131467_862',
    title: '送你一朵小红花',
  },
]

let MUSIC_LIST = [
  {
    src: 'https://mp32.9ku.com/upload/128/2020/12/18/1013609.mp3',
    title: '送你一朵小红花',
  },
  {
    src: 'https://mp3.9ku.com/hot/2012/02-20/464181.mp3',
    title: '都选C',
  },
]

const enableIncludesMyOwnMusicList = Math.random() >= 0.8
if (enableIncludesMyOwnMusicList) MUSIC_LIST = MUSIC_LIST.concat(MY_OWN_MUSIC_LIST)

export {
  MUSIC_LIST,
  BEGIN_PAGE_NUMBER,
  END_PAGE_NUMBER,
  INTERVAL_TIME,
  _getRandomRgba,
}