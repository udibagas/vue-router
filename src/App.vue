<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="w-[1000px] my-6 m-auto">
    <router-view />
  </main>
</template>

<style scoped></style>
