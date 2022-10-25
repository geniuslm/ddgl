<script setup lang="ts">
import { pinia数据中心 } from '../stores/pinia数据';
import lmInput from "@组件/行.vue";
import lmSH from "@组件/首行.vue";
import lmButton from "@组件/新版按钮.vue";
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'


let pinia = pinia数据中心();
pinia.获取旧订单();
let 提示 =()=>{
  console.log("功能暂未开放")
}

let 关闭提示 =()=>{
    console.log("功关闭提示")
}


</script>

<template>

    <div class="第五页">
        <div class="第一行">
            <h1>第六页</h1>
        </div>
    <lmButton    提示='集团范德萨解放了'   >获取旧订单</lmButton>



    </div>

</template>


<style scoped>
.第五页 {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 50px 50px 50px 1fr auto;
    align-content: start;
    align-items: start;
    background-color: #F0F2F5;
    gap: 0px;
}

/* 滚动条整体 */
.表格::-webkit-scrollbar {
    height: 10px;
    width: 10px;
}

/* 两个滚动条交接处 -- x轴和y轴 */
.表格::-webkit-scrollbar-corner {
    background-color: transparent;
}

/* 滚动条滑块 */
.表格::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.2);
    background: #535353;
}

/* 滚动条轨道 */
.表格::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.455);
}




.第一行 {
    display: grid;
    height: 50px;
    gap: 10px;
    grid-auto-flow: column;
    background-color: #F0F2F5
}

.表格 {
    display: grid;
    height: 1fr;
    grid-auto-flow: row;
    overflow: auto;
}

.分页整体 {
    gap: 2px;
    grid-auto-flow: row;
    grid-template-columns: 95px 1fr 95px;
}

.分页 {
    gap: 2px;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
}

.分页按钮 {
    height: 100%;
    width: 95px;
}
</style>
