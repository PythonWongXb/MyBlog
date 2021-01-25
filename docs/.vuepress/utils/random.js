/*
 * @Author: your name
 * @Date: 2021-01-25 14:20:56
 * @LastEditTime: 2021-01-25 14:26:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/utils/random.js
 */

function _getRandomInt(beginNumber, endNumber) {
  return Math.floor(Math.random() * (endNumber - beginNumber)) + beginNumber
}

export {
  _getRandomInt
}