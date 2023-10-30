<script setup>
import HeaderComponent from "@/components/header.component.vue";
import HomeWelcomeComponent from "@/components/home-welcome.component.vue";
import DestinationsComponent from "@/components/destinations.component.vue";
import FooterComponent from "@/components/footer.component.vue";
import ContactUsComponent from "@/components/contact-us.component.vue";
</script>

<template>

  <header>
    <header-component></header-component>
  </header>
  <main>
    <home-welcome-component></home-welcome-component>
    <destinations-component></destinations-component>
    <footer-component></footer-component>
  </main>

</template>

<style scoped>

</style>