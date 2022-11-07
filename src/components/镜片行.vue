<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, toRefs, reactive } from 'vue';
import Icon from './icons/Icon.vue';
import { socket } from "../stores/socket链接";
import { pinia数据中心 } from '../stores/pinia数据';

let pinia = pinia数据中心();
//接收参数
let { 行 } = defineProps({
  行: {
    type: Object,
    default: '空',
  }
})



let 修改镜片: any = (行: any) => {
  socket.emit('修改与添加镜片', 行, (返回数据: any) => {
    console.log(返回数据)
  });
  pinia.获取镜片();
}

let 删除镜片: any = (行: any) => {
  socket.emit('删除镜片', 行, (返回数据: any) => {
    console.log(返回数据)
  });
  pinia.获取镜片();
}





</script>

<template>


  <!-- 按修改之后显示的模块 -->
  <div class="一行">
    <input v-model="行.镜片名">
    <input v-model="行.品牌名">
    <input v-model="行.系列名">
    <input v-model="行.折射率">
    <input v-model="行.染色变色">
    <input v-model="行.高散车房">
    <input v-model="行.最高近视光度">
    <input v-model="行.最高散光光度">
    <input v-model="行.最高联合光度">
    <input v-model="行.最高远视光度">
    <input v-model="行.最高远视散光">
    <input v-model="行.供应商">
    <input v-model="行.售价">
    <input v-model="行.进货价">
    <input v-model="行.湖北和益">
    <input v-model="行.湖北蔡司">
    <input v-model="行.上海老周">
    <input v-model="行.丹阳臻视">
    <p>
      <icon @click="修改镜片(行)" 图标名="icon-cloud-upload" 颜色="#666" font-size='25px' />
      <icon @click="删除镜片(行)" 图标名="icon-delete" 颜色="#F56C6C" font-size='25px' />
    </p>

  </div>

</template>


<style scoped>
.一行 {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(19, 1fr) 80px;
  grid-template-rows: 25px;
  align-content: flex-start;
}


.高 {
  grid-template-rows: 150px;

}

input {

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 0.5px solid rgb(225, 225, 225);
  border-radius: 5px;
  background-color: #F0F2F5;
  margin: 0;
}

div {

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  border-radius: 5px;
  background-color: #F0F2F5;
  margin: 0;
}

input[type="text"] {
  text-align: center;
}

input:hover {
  box-sizing: border-box;
  border: 0.5px solid rgb(36, 168, 0);
}

input:focus {
  outline: none;
  box-shadow: 0px 0px 3px 1px rgb(50, 216, 4);
  z-index: 99;

}

.单元格 {
  position: relative;
}
</style>
