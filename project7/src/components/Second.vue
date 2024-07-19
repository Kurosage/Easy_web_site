<template>
  <div class="container">
    <img class="picture" ref="picture" v-lazy="'../assets/picture.jpg'" @load="startLoading" alt="nature">
    <div class="loader" ref="loader"><p>{{progress}}%</p></div>
  </div>
  
</template>
<script setup>
import { onMounted,ref } from 'vue';

const loading = ref(true)
const progress= ref(0)
const loader = ref(null)
const picture = ref(null)
function startLoading() {
  const timer = setInterval(() => {
    
    loader.value.style.opacity = 1 - progress.value / 100
    picture.value.style.filter = `blur(${10 - progress.value / 10}px)`
    progress.value += 1
    
    if (progress.value >= 100) {
      clearInterval(timer)
      loading.value = false
    }
  }, 50)
}
</script>
<style scoped>
  .picture{
    width:100%;
    height:80%;
    object-fit: cover;
    filter: blur(10px);
  }
  .loader{
    position:absolute;
    
    font-size:80px;
    color: #fff;
    opacity:1;

  }
</style>