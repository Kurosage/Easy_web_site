<template>
  <div class="container">
    <div class="search-panel">
      <div class="icon" @click="openSearchPanel()" :class="{isActivated:active}"> 
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
}
</script>
<style scoped>
.search-panel{
  width:70px;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  transition:linear 1s;
}
.icon{
  padding:10px;
}
.isActiveated{
  width:300px;
  background-color: #f234;
  /* transition:linear 1s; */
}
</style>