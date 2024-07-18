

<template>
 <div class="container">
    <h1>На данной странице вы увидите реализацию нескольких мини проектов вместе</h1>
    <div class="slider">
      <div v-for="i in componentsLength" :key="i" class="circlePoint">
          <div class="point">{{ i }}</div>
          <!-- <component :is="component"/> -->
      </div>
    </div>
 </div>
    
</template>
<script setup>
import first from "./components/First.vue" 
import {ref} from "vue"
const componentsArray = ref([first,"dddd"])  
const componentsLength = ref(componentsArray.value.length)
</script>
<style scoped>
.container{
  background-color: #818bc9;
  width: 100%;
  height:100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.slider{
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  gap:2em;
  height:10%;
  width:100%;
  position: fixed;
  bottom: 0;
}
.point{
  text-align:center;
  cursor: pointer;
  background-color: white;
  width:30px;
  height: 30px;
  border-radius: 50%;
  border: solid #47529b 3px ;
}
h1{
  
  text-align:center;

  font-size: 50px;
  font-weight: 800;
}
.circlePoint{
  
}

</style>
