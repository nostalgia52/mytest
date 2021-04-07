<!--
 * @Author: your name
 * @Date: 2021-04-06 15:27:28
 * @LastEditTime: 2021-04-07 17:51:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹 (2)\my-test\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="hello">
      你好
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const canvas = document.createElement('canvas')
var ctx1 = canvas.getContext('2d');//让我们拿到一个CanvasRenderingContext2D对象
		//var gl = canvas.getContext("webgl");//3d
		ctx1.clearRect(0, 0, canvas.width, canvas.height);//擦除(0,0)位置大小为canvas1.width，canvas1.height的矩形，擦除的意思是把该区域变为透明
		ctx1.beginPath();//开始
		ctx1.shadowOffsetX = 2;//阴影
		ctx1.shadowOffsetY = 2;//阴影
		ctx1.shadowBlur = 2;//模糊级数
		ctx1.shadowColor = '#666666';//阴影颜色
		ctx1.font = '24px Arial';
		ctx1.fillStyle = '#333333';//填充颜色
		ctx1.fillText('带阴影的文字', 20, 40);
document.body.append(canvas)
export default {
  name: 'Home'
}
</script>
<style lang="scss">
  .home{
    img{
      width: 6.25rem;
    }
    .hello{
      font-size: .4rem;
    }
  }
</style>
