<template>
  <div class="container">
    <component :is="componentsArray[activeSlide-1]"/>
    <div class="slider">
      <div class="progressbar" >
        <div v-for="i in componentsLength" :key="i" class="circlePoint">
          <div class="point" @click="active_slide(i)" :class="{isActive:activeSlide >= i}">{{ i }}</div>
        </div>
      </div>
      <div class="buttons">
        <button class="backBtn" @click="before()" :class="{activatedBtn:activeSlide != 1}">Назад</button>
        <button class="nextBtn" @click="after()" :class="{activatedBtn:activeSlide != componentsLength}">Далее</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import first from "./components/First.vue"
import second from "./components/Second.vue"
import third from "./components/Third.vue"
import {ref} from "vue"
const componentsArray = ref([first,second,third])
const componentsLength = ref(componentsArray.value.length)
const activeSlide = ref(1)


function active_slide(item) {
  activeSlide.value = item;
  
}

function before() {
  if (activeSlide.value > 1) {
    activeSlide.value--;
    
  }
}

function after() {
  if (activeSlide.value < componentsLength.value) {
    activeSlide.value++;
    
  }
}
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
  flex-direction:column;
  justify-content:center;
  align-items: center;
  height:10%;
  width:100%;
  position: fixed;
  bottom: 0;
}

.progressbar {
  display: flex;
  flex-direction: row;
  gap: 2em;
  position: relative;
  overflow: hidden;
}

.progressbar::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 5px;
  background-color: #ffffff;
  transform: translateY(-50%);
  z-index: -1;
  transition: width 0.5s ease-in-out;
}


.point{
  position: relative;
  z-index: 1;
  text-align:center;
  cursor: pointer;
  background-color: white;
  width:30px;
  height: 30px;
  border-radius: 50%;
  border: solid #47529b 3px ;
  transition:ease-in-out 0.5s;
}

h1{
  text-align:center;
  font-size: 50px;
  font-weight: 800;
}

.buttons{
  display: flex;
  gap:2em;
}

.backBtn, .nextBtn{
  cursor:not-allowed;
  background-color: #3b3e4d;
  width: 70px;
  height: 30px;
  border-radius: 20px;
  border: solid #47529b 3px ;
}

.isActive{
  background-color: #47529b;
  transition:ease-in-out 0.5s;
}

.activatedBtn{
  cursor:pointer;
  background-color: #ffffff;
}
</style>
