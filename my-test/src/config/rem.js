/*
 * @Author: your name
 * @Date: 2021-04-07 15:38:35
 * @LastEditTime: 2021-04-07 16:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹 (2)\my-test\src\config\rem.js
 */
const setFontSize = (minFontSize = 12, maxFontSize = 16) => {
  // 7.5根据设计稿的横向分辨率/100得来
  var deviceWidth = document.documentElement.clientWidth
  // 获取浏览器宽度
  if (deviceWidth > 750) {
    // deviceWidth = 750
    deviceWidth = 7.5 * 50
  } else if (!deviceWidth) {
    return
  }
  // const fontSize = Math.max(minFontSize, Math.min(12 * (deviceWidth / 320), maxFontSize))

  document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`
  // 这样子的1rem=font-size的大小
  // 当然，万一你觉得这样子做的rem太小，可以推荐你第二种写法，相对更加简便，代码如下(注释的)
  // 获取浏览器宽度
  //  if(deviceWidth > 750) {
  // deviceWidth = 750
  //  deviceWidth = 7.5 * 50
  //  }
  // document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`
  // 此时的fontSize大小为50px(375屏幕的时候)

  // 禁止双击放大
  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }, false)
  var lastTouchEnd = 0
  document.documentElement.addEventListener('touchend', function (event) {
    var now = Date.now()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)
}
export default {
  setFontSize
}
