

<template>
  <div class="container">
    <div class="img-container" @click="updateActive(1)">
      <img :class="{ activeC: active == 1}"  src="../assets/img/pic1.jpg" alt="">
      <div :class="{ pictureText: active == 1}">Tree And Sun</div>
    </div>
    <div class="img-container"  @click="updateActive(2)">
      <img :class="{ activeC: active == 2}" src="../assets/img/pic2.jpg" alt="">
      <div :class="{ pictureText: active == 2}">Montains</div>
    </div>
    <div class="img-container"  @click="updateActive(3)">
      <img :class="{ activeC: active == 3}" src="../assets/img/pic3.jpg" alt="">
      <div :class="{ pictureText: active == 3}">Field</div>
    </div>
    <div class="img-container" @click="updateActive(4)">
      <img :class="{ activeC: active == 4}" src="../assets/img/pic4.jpg" alt="">
      <div :class="{ pictureText: active == 4}">Trees and Field</div>
    </div>
    <div class="img-container"  @click="updateActive(5)">
      <img :class="{ activeC: active == 5}" src="../assets/img/pic5.jpg" alt="">
      <div :class="{ pictureText: active == 5}">Trees and Montains</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Transition } from 'vue-transition';
  const active = ref(1)
  
  function updateActive(number){
    active.value = number
   
  }

</script>
<style scoped>
  .container{
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center; 
    
  }
  img.activeC{
    height: 760px;
    width:800px;
    border-radius: 50px;
   
  }
  .img-container { 
    height:760px;
  /* height: auto;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  align-self: center; */
  position:relative;
}
  img{
    max-width: 100%;
    height: 760px;
    width:100px;
    
    border-radius: 50px;
    object-fit: cover;
    transition: width 0.7s ease-in;
  }
  .pictureText{
    position: absolute;
    top: 80%;
    left:5%;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    
    /* padding: 10px; */
    border-radius: 10px;
  }
  

</style>
