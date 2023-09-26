<script setup>
import HeaderComponent from "@/components/header.component.vue";
import HomeWelcomeComponent from "@/components/home-welcome-component.vue";
import DestinationsComponent from "@/components/destinations-component.vue";
import FooterComponent from "@/components/footer-component.vue";

</script>

<template>
  <header>
    <header-component></header-component>
  </header>
  <home-welcome-component></home-welcome-component>
  <destinations-component></destinations-component>
  <footer-component></footer-component>
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