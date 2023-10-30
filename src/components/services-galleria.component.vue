<script setup>

</script>

<template>
  <div class="galleria" style="width: fit-content;">
    <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg" alt="servicio 1">
  </div>
</template>

<style scoped>
.galleria {
  overflow: hidden;
  border-radius: 20px;
  min-width: min(15rem, 100%);
  max-width: min(35rem, 100%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

