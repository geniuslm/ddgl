<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
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
let 旺旺名显示开关 = ref(false)
let 姓名显示开关 = ref(false)
let 下单日显示开关 = ref(false)
let 修改开关 = ref(false)
if (行.类型 == '新订单') {
  修改开关.value = true;
  let date = new Date()                                                                        //获取日期与时间
  let 日期 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()           //获取日期与时间
  let 时间 = ref(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())          //获取日期与时间
  let month = ("0" + (date.getMonth() + 1)).slice(-2)
  行.年 = date.getFullYear().toString().slice(2)
  行.月 = ("0" + (date.getMonth() + 1)).slice(-2)
  行.日 = ("0" + date.getDate()).slice(-2)
  行.备注 = date.getFullYear().toString().slice(2) + ("0" + (date.getMonth() + 1)).slice(-2)+("0" + date.getDate()).slice(-2)

}

let 修改订单 = (行: any) => {
  socket.emit('修改与添加订单', 行, (返回数据: any) => {
    console.log(返回数据)
  });
  console.log('修改订单');
  pinia.获取旧订单();
  修改开关.value = !修改开关.value
}


</script>

<template>
  <div v-if="!修改开关" class="行">
    <div>{{行.订单号}}</div>
    <div>{{行.年}}</div>
    <div>{{行.月}}</div>
    <div>{{行.日}}</div>
    <div>{{行.镜片下单日}}</div>
    <div>{{行.旺旺名}}</div>
    <div>{{行.收件人}}</div>
    <div>{{行.镜片}}</div>
    <div>{{行.右近视}}</div>
    <div>{{行.右散光}}</div>
    <div>{{行.右轴向}}</div>
    <div>{{行.左近视}}</div>
    <div>{{行.左散光}}</div>
    <div>{{行.左轴向}}</div>
    <div>{{行.右瞳距}}+{{行.左瞳距}} </div>

    <div>{{行.备注}}</div>
    <icon 图标名="icon-delete" 颜色="#666" font-size='25px' />
    <icon 图标名="icon-delete" 颜色="#666" font-size='25px' />
    <icon 图标名="icon-delete" 颜色="#666" font-size='25px' />
    <icon @click="修改开关=!修改开关" 图标名="icon-setting" 颜色="#666" font-size='25px' />




  </div>





  <div v-if="修改开关" class="行 ">

    <input type="text" v-model.lazy="行.订单号">
    <input type="text" v-model.lazy="行.年">
    <input type="text" v-model.lazy="行.月">
    <input type="text" v-model.lazy="行.日">
    <input type="text" v-model.lazy="行.镜片下单日">
    <input type="text" v-model.lazy="行.旺旺名">
    <input type="text" v-model.lazy="行.收件人">
    <input type="text" v-model.lazy="行.镜片">
    <input type="text" v-model.lazy="行.右近视">
    <input type="text" v-model.lazy="行.右散光">
    <input type="text" v-model.lazy="行.右轴向">
    <input type="text" v-model.lazy="行.左近视">
    <input type="text" v-model.lazy="行.左散光">
    <input type="text" v-model.lazy="行.左轴向">
    <input type="text" v-model.lazy="行.瞳距">
    <input type="text" v-model.lazy="行.备注">

    <icon @click="修改订单(行)" 图标名="icon-cloud-upload" 颜色="#666" font-size='25px' />

  </div>
</template>


<style scoped>
.行 {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100px repeat(3, 30px) 100px 200px 120px 170px repeat(6, 60px) 100px 1fr;
  grid-template-rows: 25px;
  align-content: flex-start;
  background-color: #F0F2F5
    /* display: grid;
  width: 100%;
  grid-auto-flow: column;
  align-content: flex-start;
  grid-template-columns: repeat(5, 1fr) repeat(6, 50px)  1fr ;
  grid-gap: 2px;

  grid-template-rows: 25px;
  background-color: #F0F2F5 */
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
  border: 0.5px solid rgb(225, 225, 225);
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

.下滑菜单 {
  display: grid;
  gap: 5px;
  position: absolute;
  border-radius: 5px;
  background-color: #F0F2F5;
  box-shadow: 0px 0px 3px 1px rgb(50, 216, 4);
  height: auto;
  top: 35px;
  z-index: 5;
}

button {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
  box-sizing: border-box;
  border: 2px solid #67C23A;
  width: 100%;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  height: 40px;
  overflow: hidden;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #67C23A;
  transition: all 0.2s;
}

button:hover {
  background-color: #95d475;
  border: 5px solid #95d475;
}

button:active {
  background-color: #529b2e;
  border: 5px solid #67C23A;
}
</style>
