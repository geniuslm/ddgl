<script setup lang="ts">
import { pinia数据中心, 订单类, 镜片类 } from '../stores/pinia数据';
import lmH from "@组件/镜片行.vue";
import { socket } from '@/stores/socket链接';


let pinia = pinia数据中心();
pinia.获取旧订单();




</script>

<template>

    <div class="第十页">
        <h1>第十页</h1>
  


        <div> pinia数据-----------------{{ pinia.新订单数据表 }}</div>
       <lmb >添加新订单</lmb>
    </div>

</template>


<style scoped>
.第十页 {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: auto;
    align-content: start;
    align-items: start;
    background-color: #F0F2F5;
    gap: 0px;
}
</style>
