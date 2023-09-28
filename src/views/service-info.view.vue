<script setup>
import NavbarComponent from '../components/navbar.component.vue';
import TouristProfile from "@/components/tourist-profile.component.vue";
</script>

<template>

  <div class="service-info">
    <navbar-component></navbar-component>
    <div class="container">
      <tourist-profile></tourist-profile>
    </div>
  </div>

</template>

<style scoped>
  .service-info {
    width: 100%;
    min-height: 100vh;
    background-color: #EDEDED;
    margin: 0;
    .container {
      padding-top: 8%;
    }
  }
</style>