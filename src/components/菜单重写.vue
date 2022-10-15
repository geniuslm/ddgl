<script setup lang="ts">
import { pinia数据中心 } from "../stores/pinia数据";
import lmButton from "@组件/按钮.vue";
import { reactive, ref } from "vue";


let 菜单列表 = [
    {  目标页: "/", 内容: "主页", 图标: "icon-home" },
    {  目标页: "/1", 内容: "图标页", 图标: "icon-star-fill" },
    {  目标页: "/2", 内容: "第2测试页", 图标: "icon-question-circle" },
    {  目标页: "/3", 内容: "3用户页", 图标: "icon-team" },
    {  目标页: "/4", 内容: "4旧订单", 图标: "icon-filedone" },
    {  目标页: "/5", 内容: "5删除单", 图标: "icon-question-circle" },
    {  目标页: "/6", 内容: "第六测试", 图标: "icon-question-circle" },
    {  目标页: "/7", 内容: "第七测试", 图标: "icon-question-circle" },
    {  目标页: "/8", 内容: "第八测试", 图标: "icon-question-circle" },
    {  目标页: "/9", 内容: "第九测试", 图标: "icon-question-circle" },
    {  目标页: "/mr", 内容: "默认页", 图标: "icon-file" },


]


let 开关 = ref(true);


</script>

<template>
    <div class="菜单" :style="[开关 ? ' width:  100px' : 'width: 50px']">
        <lmButton v-for="按钮 in 菜单列表" :key="按钮.内容" :目标路径="按钮.目标页">
            <!-- <icon v-if="!开关" :iconName="按钮.图标" color="#fff" font-size="30px" />
            <icon v-if="开关" :iconName="按钮.图标" color="#fff" font-size="20px" /> -->
            <icon v-show="!开关" :图标名="按钮.图标" color="#fff" font-size="30px" />
            <icon v-show="开关" :图标名="按钮.图标" color="#fff" font-size="20px" />
            <p v-if="开关">{{ 按钮.内容 }}</p>
        </lmButton>
        <lmButton @click="开关 = !开关">{{ 开关 ? "开" : "关" }}</lmButton>
        <div class="展开按钮" @click="开关 = !开关"></div>
    </div>
</template>

<style scoped>
.菜单 {
    display: grid;
    box-sizing: border-box;
    gap: 2px;
    width: 100px;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    align-content: start;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #f0f2f5;
    padding: 5px;
    transition: all 0.2s;
    position: relative;
}

p {
    white-space: nowrap;
}

.展开按钮 {
    position: absolute;
    right: -10px;
    width: 20px;
    height: 100px;
    border-radius: 10px;
    background-color: #409EFF;
    transition: all 0.2s;
    z-index: 1;
}

.展开按钮:hover {
    right: -15px;
    width: 30px;
    height: 150px;
    border-radius: 15px;
    background-color: #337ecc;
}
</style>
