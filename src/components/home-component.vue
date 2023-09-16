<script>
import HomeWelcomeComponent from "@/components/home-welcome-component.vue";
import DestinationsComponent from "@/components/destinations-component.vue";

export default {
  name: "HomeComponent",
  components: {DestinationsComponent, HomeWelcomeComponent}
}
</script>

<template>
  <home-welcome-component></home-welcome-component>
  <destinations-component></destinations-component>
</template>

<style scoped>

</style>