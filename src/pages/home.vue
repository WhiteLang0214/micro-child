<template>
  <div>{{ msg }} --- 登录名：{{ username }}</div>
  <router-view />
</template>

<script setup lang="js">
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const msg = "子应用的home页面"

const username = store.getters.getLoginInfo.username;

onMounted(() => {
  console.log('home---', store)
})

</script>
<style scoped>
</style>