<script setup lang = "ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let props = defineProps({
  文字: {
    type: String,
    default: 'LM按钮',
  },
  提示: {
    type: String,
    default: '没啥提示',
  },
})

let 显示提示 = ref(false)


</script>

<template>
  <button @mouseenter="显示提示 = true" @mouseleave="显示提示 = false">
    {{ props.文字 }}
    <slot></slot>
    <div class="提示" v-show="显示提示">
      <div class="尖角"></div>
      {{ props.提示 }}
    </div>
  </button>


</template>







<style scoped>
/* 默认样式 */
button {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  box-sizing: border-box;
  border: 2px solid #409EFF;
  width: 100%;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  height: 30px;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #409EFF;
  position: relative;
  transition: all 0.2s;
}

button:hover {
  background-color: #79bbff;
  border: 2px solid #79bbff;
}

button:active {
  background-color: #337ecc;
  border: 2px solid #337ecc;
}

.提示 {
  position: absolute;
  top: 35px;
  width: auto;
  height: auto;
  padding: 6px 15px;
  background-color: #4b4b4bbe;
  color: #fff;
  border-radius: 8px;
  font-size: 19px;
  font-weight: normal;
  text-align: center;
  transition: all 0.2s;
  z-index: 999;
}

.尖角 {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #4b4b4bbe;
  top: -10px;
  transition: all 0.2s;
  z-index: 99;
}
</style>
