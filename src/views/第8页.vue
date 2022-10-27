<script setup lang = "ts">
import { pinia数据中心 } from '../stores/pinia数据';
import lmInput from "@组件/行.vue";
import lmSH from "@组件/首行.vue";
import lmButton from "@组件/按钮.vue";
import lmWin from "@组件/添加订单窗口.vue";
import { socket } from "../stores/socket链接";
import { onMounted, ref, toRef } from 'vue';


let pinia = pinia数据中心();
pinia.获取镜片();


let 修改镜片 = (行: any) => {
    socket.emit('修改与添加镜片', 行, (返回数据: any) => {
        console.log('镜片名'+返回数据.镜片名+'修改成功')
        pinia.获取镜片();
    });
}
let 创建镜片 = (行: any) => {
    socket.emit('创建镜片', 行, (返回数据: any) => {
        console.log('镜片名'+返回数据.镜片名+'创建成功')
        pinia.获取镜片();
    });
}
let 复制镜片 = (行: any) => {
    socket.emit('创建镜片', 行, (返回数据: any) => {
        console.log('镜片名'+返回数据.镜片名+'创建成功')
        pinia.获取镜片();
    });
}

let 删除镜片 = (_id: any) => {
    socket.emit('删除镜片',_id, (返回数据: any) => {
        console.log(返回数据)
        pinia.获取镜片();
    });
}




</script>

<template>

    <div class="第四页">

        <div class="第一行">

            <h1>镜片列表{{ pinia.日期 }}</h1>

            <lmButton>当前显示 {{ pinia.镜片数据.length }} 条数据</lmButton>

        </div>


        <!-- 表格模块 -->
        <div class="表格外">
            <div class="表格">
                <div v-for="行,k in pinia.镜片数据" :key="行._id" class="行">
                    <div>{{行.镜片名}}</div>
                    <div>{{行.品牌名}}</div>
                    <div>{{行.系列名}}</div>
                    <div>{{行.染色}}</div>
                    <div>{{行.变色}}</div>
                    <div>{{行.高散}}</div>
                    <div>{{行.车房}}</div>
                    <div>{{行.供应商}}</div>
                    <div>{{行.售价}}</div>
                    <div>{{行.进货价}}</div>
                    <div>{{行.湖北和益}}</div>
                    <div>{{行.湖北蔡司}}</div>
                    <div>{{行.上海老周}}</div>
                    <div>{{行.丹阳臻视}}</div>
                    <icon @click="复制镜片(pinia.镜片数据[k])" 图标名="icon-file-copy" 颜色="#67C23A" font-size='25px' />
                    <icon @click="删除镜片(pinia.镜片数据[k]._id)" 图标名="icon-delete" 颜色="#F56C6C" font-size='25px' />
                </div>
            </div>
        </div>




        <!-- 添加新订单模块 -->
        <div class="添加订单">
            <div class="添加镜片">
                <input v-model.lazy="pinia.新镜片模板.镜片名" placeholder="镜片名">
                <input v-model.lazy="pinia.新镜片模板.品牌名" placeholder="品牌名" list="mySuggestion">
                <input v-model.lazy="pinia.新镜片模板.系列名" placeholder="系列名">
                <input v-model.lazy="pinia.新镜片模板.染色" placeholder="染色">
                <input v-model.lazy="pinia.新镜片模板.变色" placeholder="变色">
                <input v-model.lazy="pinia.新镜片模板.高散" placeholder="变色">
                <input v-model.lazy="pinia.新镜片模板.车房">
                <input v-model.lazy="pinia.新镜片模板.供应商">
                <input v-model.lazy="pinia.新镜片模板.售价">
                <input v-model.lazy="pinia.新镜片模板.进货价">
                <input v-model.lazy="pinia.新镜片模板.湖北和益">
                <input v-model.lazy="pinia.新镜片模板.湖北蔡司">
                <input v-model.lazy="pinia.新镜片模板.上海老周">
                <input v-model.lazy="pinia.新镜片模板.丹阳臻视" placeholder="丹阳臻视">
                <datalist id="mySuggestion">
                    <option v-for="订单 in pinia.旧订单 ">{{ 订单.镜片 }}</option>
                </datalist>
            </div>

            {{ pinia.新镜片模板 }}
            <lmButton @click="创建镜片(pinia.新镜片模板)">
                <icon 图标名="icon-plus-circle-fill" 颜色="#fff" font-size='20px' />
                <p>添加镜片</p>
            </lmButton>
        </div>


    </div>

</template>


<style scoped>
.行{
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr  1fr;
  grid-template-rows: 25px;
  border-bottom: 1px solid rgb(139, 139, 139);
  box-sizing: border-box;
  background-color: #F0F2F5
}
.添加镜片 {
    display: grid;
    background-color: rgba(87, 16, 16, 0.363);
    grid-auto-flow: column;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
}

input {
    width: 100%;
    height: 15px;
    border: 1px solid rgb(122, 122, 122);
    border-radius: 5px;
    color: rgb(189, 40, 40);
    font-size: 10px;
    text-align: center;
}


.查找状态 {
    background-color: #337ecc;
}

.第四页 {
    display: grid;
    width: 100%;
    grid-auto-flow: row;
    grid-template-rows: 50px 1fr auto auto;
    grid-template-columns: 100%;
    align-content: start;
    align-items: start;
    background-color: #F0F2F5;
    position: relative;
    gap: 0px;
}

/* .弹窗{
  position        : absolute;
  top             : 50%;
  left            : 50%;
  width           : 50%;
  height          : 50%;
  transform       : translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius   : 8px;
  z-index         : 1;
} */

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
    grid-template-columns: 1fr;
    height: 1fr;
    align-content: start;
    grid-auto-flow: row;
    overflow: auto;
    overflow-y: scroll;
}

.表格外 {
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    grid-auto-flow: row;

    overflow: auto;
}

.添加订单 {
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-flow: row;
    border: 5px solid #337ecc;
    border-radius: 10px;

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
