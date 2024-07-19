<template>
  <div class="container">
    <div class="search-panel" :class="{isActivated:active}">
      <input class="inputText" placeholder="Search..." type="text" >
      <div class="icon" @click="openSearchPanel()">
        <i class="fa fa-search fa-3x" style="color: black;" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
const active = ref(false)

function openSearchPanel(){
  active.value = !active.value
  const input = document.querySelector('.inputText');
  if (active.value == true){
    input.style.zIndex = 1;
    input.style.width = '220px'
  }else{
    input.style.zIndex = -1;
    input.style.width = '0px'
  }
}
</script>

<style scoped>
.search-panel{
  width:80px;
  height: 90px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor:pointer;
  transition: width 0.1s linear ;
}
.icon{
  padding:10px 15px 10px 10px;
}
.isActivated{
  width:300px;
  transition: width 0.1s linear;
}
.inputText{
  height:50px;
  width:0px;
  border:none;
  padding: 5px;
  font-size: 25px;
  transition: width 0.1s linear ;
  overflow: hidden;
  z-index: -1;
}
.inputText:focus{
  border: none;
  outline: none;

}
</style>