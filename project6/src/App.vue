

<template>
  <div class="navbar"  :class="{ rotateCircle1: active, rotateCircle2: !active }">
    <button @click="openMenu()"  class="menu-btn">
      <i class="fa fa-bars fa-2x"  aria-hidden="true" ></i>
      
    </button>
    <button  @click="openMenu()" class="menu-btn-close" >
      <i class="fa fa-times fa-2x" aria-hidden="true"></i>
      
    </button>
    
  </div>
 <div class="container" >
   
   
    <div class="article"  :class="{ rotateArticle1: active , rotateArticle2: !active}">
      <h1>My fivourite pet</h1>
      <small class="author-name"><i>Kamila</i></small>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione 
            dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore
            modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident
            natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
            molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos 
            in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe v
            oluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem 
            molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
            <br>
      <h3 class="pet-name">Raven</h3>
      <br>
      <img class="raven-img" src="./assets/img/raven.jpg" alt="">
      <br>
      <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. 
            Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
              temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore 
            autem maxime similique laborum odio, magnam esse. Aperiam?
      </p>
    </div>
    <div class="menu-side" :class="{ rotateMenu1: active }">
      <i class="fa fa-home fa-1x" aria-hidden="true">HOME</i><br>
      <i class="fa fa-address-book fa-1x" aria-hidden="true">ABOUT</i><br>
      <i class="fa fa-envelope-open-o fa-1x" aria-hidden="true">CONTACTS</i><br>
    </div>
 </div>
</template>
<script setup>
import {ref} from "vue"
const active =ref(false)

function openMenu() {
  active.value = !active.value;
 
  
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+PE:wght@100..400&display=swap');
.container{
  width: 100%;
  height: 100%;
 background-color: rgb(51,51,51);
 
}
.rotateCircle1{
  transform: rotate(-90deg);
}

.rotateCircle2{
  transform: rotate(0deg);
}

.article{
  background-color: white;
  padding: 100px 15% 100px 15%;
  /* max-width:1200px; */
  display: flex;
  justify-content: center;
  flex-direction:column;
  
  transform-origin: top left;
  transition: transform 0.5s ease;
  /* align-items: center; */
}
.rotateArticle1{
  transform: rotate(-30deg);
}

.pet-name{
  font-size:1.7em;
}
h1, .pet-name{
  font-weight: bold;
  font-family: "Playwrite PE", cursive;
  font-optical-sizing: auto;
  font-weight: 1000;
  font-style: normal;
}
.author-name{
  opacity:0.8;
}
.raven-img{
  object-fit: cover;
  max-width:100%;
  max-height: auto;
}
.navbar{
  position:fixed;
  top:-100px;
  left:-100px;
  background-color: #FF7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  z-index: 1000; 
  transition: transform 0.5s ease;
  /* background-color: rgb(51,51,51); */
}

.navbar button{
  position: absolute;
 
  cursor: pointer;
    
  background: transparent;
  border: 0;
   
 
}
.navbar .menu-btn{
  bottom: 45px;
  right: 45px;
}
.navbar .menu-btn-close{
  bottom: 45px;
  left: 45px;
}
.menu-side{
  position: fixed;
  bottom: 40px;
  left:-150px;
  transition: left 0.5s linear;
}
.menu-side > i{
  
  color:white;
  padding-top: 25px;
}
.rotateMenu1{
  left:40px;
}

</style>
