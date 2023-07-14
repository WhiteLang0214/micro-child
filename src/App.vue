<template>
  <!-- {{ msg }} -->
  <router-view />
</template>

<script setup lang="js">

import { onMounted, ref } from 'vue';

let msg = ref("");

const setDate = () => {
  msg.value = "子应用倒计时:" +  new Date();
  setInterval(() => {
    console.log(1)
    msg.value = "子应用倒计时:" +  new Date();
  }, 1000)
}

onMounted(() => {
  setDate();
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
