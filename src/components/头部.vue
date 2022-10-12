<script setup lang="ts">

import { pinia数据中心 } from '../stores/pinia数据';
import { useRouter } from 'vue-router';
import { socket } from "../stores/socket链接";

let pinia = pinia数据中心()
let router = useRouter()

let 退出登录 = () => {
  localStorage.removeItem("token");
  router.push("/login");
}

socket.on("connect", () => {
    pinia.当前数据库状态 = "已连接"
    console.log("数据库已连接"); 

});
socket.on("disconnect", () => {
    pinia.当前数据库状态 = "断开连接"
    console.log("数据库链接断开"); 
});


</script>

<template>
  <div class="头部">
    {{ pinia.当前登录用户 }}
    <button @click="退出登录"> 退出登录</button>
    <div>当前登录状态 {{pinia.当前数据库状态}}</div>

  </div>
</template>


<style scoped>
.头部 {
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #F0F2F5
}
</style>
