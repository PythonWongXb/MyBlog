/*
 * @Author: your name
 * @Date: 2021-01-25 14:27:14
 * @LastEditTime: 2021-01-27 17:04:02
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

export {
  BEGIN_PAGE_NUMBER,
  END_PAGE_NUMBER,
  INTERVAL_TIME,
  _getRandomRgba,
}