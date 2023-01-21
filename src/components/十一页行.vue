<script setup lang = "ts">
import { useRouter } from 'vue-router';
import { ref, toRefs, reactive, computed } from 'vue';
import Icon from './icons/Icon.vue';
import { socket } from "../stores/socket链接";
import { pinia数据中心 } from '../stores/pinia数据';
import { pinia库 } from '../stores/pinia库';

let 库 = pinia库();
//接收参数
//子组件
let props = defineProps(['行数据'])
let emit  = defineEmits(['update:行数据'])
let 数据    = computed({
  get() {
    return props.行数据
  },
  set(value) {
    emit('update:行数据', value)
  }
})


let 镜片 = ref('')
let 镜框 = ref('')

let 哈哈= ()=>{镜框.value=''}


</script>

<template>

  <!-- 默认显示的模块 -->
  <div class = "页">
  <div class = "第一行">
  <div class = "标识格">
  <div class = "标识">订单号:{{ 数据.订单号 }}</div>
  <div class = "标识">{{ 数据.旺旺名 }}</div>
  <div class = "标识">收件人:{{ 数据.收件人 }}</div>
      </div>
      <div class = "镜片格">
      <div class = "镜片 跨越三列">{{ 数据.镜片 }}</div>
      <div class = "镜片">{{ 数据.镜片下单日 }}下单</div>
      <div class = "镜片">15日镜片已定</div>
      <div class = "镜片">17日镜片备好</div>
      </div>
      
      <div   class = "镜框格" >
      <input class = "跨越三列"   v-model = 镜框  list = "镜框选项" @focus ="哈哈">
      </div>
      <datalist id    = "镜框选项">
        <option>来框加工</option>
        <option>试戴镜框</option>
        <option>直接加工</option>
      </datalist>
      



    </div>
    <div class = "行">
      <div>{{ 数据.订单号 }}</div>
      <div>{{ 数据.年 }}</div>
      <div>{{ 数据.月 }}</div>
      <div>{{ 数据.日 }}</div>
      <div>{{ 数据.镜片下单日 }}</div>
      <div>{{ 数据.旺旺名 }}</div>
      <input type = "text" v-model.lazy = "数据.收件人">
      <div>{{ 数据.镜片 }}</div>
      <div>{{ 数据.右近视 }}</div>
      <div>{{ 数据.右散光 }}</div>
      <div>{{ 数据.右轴向 }}</div>
      <div>{{ 数据.左近视 }}</div>
      <div>{{ 数据.左散光 }}</div>
      <div>{{ 数据.左轴向 }}</div>
      <div>{{ 数据.右瞳距 }}+{{ 数据.左瞳距 }} </div>

      <icon 图标名 = "icon-down" 颜色    = "#666" font-size    = '25px' />
      <icon 图标名 = "icon-setting" 颜色 = "#666" font-size    = '25px' />
      <icon 图标名 = "icon-delete" 颜色  = "#F56C6C" font-size = '25px' />
    </div>
    <div class = "验光数据">
      <div>{{ 数据.右近视 }}</div>
      <div>{{ 数据.右散光 }}</div>
      <div>{{ 数据.右轴向 }}</div>
      <div>{{ 数据.右瞳距 }}</div>

      <div>{{ 数据.左近视 }}</div>
      <div>{{ 数据.左散光 }}</div>
      <div>{{ 数据.左轴向 }}</div>
      <div>{{ 数据.左瞳距 }}</div>

    </div>

  </div>

</template>


<style scoped>
.页 {
  display              : grid;
  grid-auto-flow       : column;
  grid-template-columns: 1fr;
  grid-template-rows   : 1fr 1fr 1fr;
}

.行 {
  display              : grid;
  grid-auto-flow       : row;
  grid-template-columns: 100px repeat(3, 30px) 100px 200px 120px 170px repeat(6, 60px) 100px 1fr 1fr 1fr;
  grid-template-rows   : 25px;
  background-color     : #F0F2F5
}

.第一行 {
  display              : grid;
  grid-auto-flow       : row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows   : 1fr;
  background-color     : #F0F2F5
}

.标识格 {
  display              : grid;
  grid-auto-flow       : row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows   : 1fr;
  background-color     : #F0F2F5;
}

.镜片格 {
  display              : grid;
  grid-auto-flow       : row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows   : 1fr 1fr;
  background-color     : #F0F2F5;

}
.镜框格{
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows   : 1fr 1fr;
  background-color     : #c2ffcb;
}
.试戴镜框{
  background-color     : #a5c9ff;
}


.验光数据 {
  display              : grid;
  grid-auto-flow       : row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows   : 25px 25px;
  background-color     : #F0F2F5;
}

.跨越三列 {
  grid-column: 1 / span 3
}

.高 {
  grid-template-rows: 150px;
}

.镜片 {
  background-color: #b8d4ff;
}

.标识 {
  background-color: #b7c3d4;
}


input {

  box-sizing      : border-box;
  width           : 100%;
  height          : 100%;
  border          : 0.5px solid rgb(225, 225, 225);
  text-align      : center;
  border-radius   : 5px;
  background-color: #F0F2F5;
  margin          : 0;
  
}

div {

  box-sizing      : border-box;
  width           : 100%;
  height          : 100%;
  border          : 0.5px solid rgb(225, 225, 225);
  border-radius   : 5px;
  background-color: #F0F2F5;
  margin          : 0;
}

input[type="text"] {
  text-align: center;
}

input:hover {
  box-sizing: border-box;
  border    : 0.5px solid rgb(36, 168, 0);
}

input:focus {
  outline   : none;
  box-shadow: 0px 0px 3px 1px rgb(50, 216, 4);
  z-index   : 99;

}

.单元格 {
  position: relative;
}

.下滑菜单 {
  display         : grid;
  gap             : 5px;
  position        : absolute;
  border-radius   : 5px;
  background-color: #F0F2F5;
  box-shadow      : 0px 0px 3px 1px rgb(50, 216, 4);
  height          : auto;
  top             : 35px;
  z-index         : 5;
}

button {
  display           : grid;
  grid-auto-flow    : row;
  grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
  box-sizing        : border-box;
  border            : 2px solid #67C23A;
  width             : 100%;
  border-radius     : 4px;
  padding           : 4px 8px;
  font-family       : Arial;
  font-size         : 14px;
  font-weight       : bold;
  color             : #ffffff;
  height            : 40px;
  overflow          : hidden;
  align-content     : center;
  align-items       : center;
  justify-content   : center;
  justify-items     : center;
  background-color  : #67C23A;
  transition        : all 0.2s;
}

button:hover {
  background-color: #95d475;
  border          : 5px solid #95d475;
}

button:active {
  background-color: #529b2e;
  border          : 5px solid #67C23A;
}
</style>
