<script setup>

</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  background-color: white;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

</style>
