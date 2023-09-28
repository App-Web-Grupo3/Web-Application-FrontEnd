<script setup>
import NavbarComponent from '@/components/navbar.component.vue';
import TouristProfileComponent from "@/components/tourist-profile.component.vue";
import FooterComponent from "@/components/footer.component.vue";
import CommentComponent from "@/components/comment-servicio.component.vue";
import GalleriaComponent from "@/components/services-galleria.component.vue";
import ServiceDataComponent from "@/components/service-data.component.vue";
import {ref} from "vue";

const services = ref([
  {
    name: "TravelNew",
    title: "Época de escalamiento en Huandoy, alpinismo para principiantes",
    description: "Si eres una persona que le gusta la adrenalina, el alpinismo es lo tuyo" +
        "ven a Huandoy y realiza este divertido y extremos deporte, tambien lo pueden" +
        "realizar los principiantes ya que contamos con todos los medios de seguridad" +
        "para evitar accidentes.",
    email: "travelnew@gmail.com",
    phone: "+51 952364789",
    country: "Peru",
    images: ["imagen1.jpg", "imagen2.jpg"],
  }
]);
</script>

<template>
  <div class="service-info">
    <navbar-component></navbar-component>
    <div class="container flex gap-5">
      <div class="start layout" style="flex-grow: 1">
        <tourist-profile-component></tourist-profile-component>
      </div>
      <div class="end flex gap-5" style="flex-grow: 9999">
        <div v-for="(service, index) in services" :key="index" class="info layout">
          <h1 class="title">{{ $t('service') }} {{ service.name }}</h1>
          <div class="content flex gap-5 justify-content-between align-items-center">
            <galleria-component></galleria-component>
            <service-data-component :service="service"></service-data-component>
          </div>
        </div>
        <div class="feedback layout">
          <h1 class="title">{{ $t('comment') }}</h1>
          <comment-component></comment-component>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>
.service-info {
  width: 100%;
  min-height: 100vh;
  background-color: #EDEDED;
  margin: 0;

  .container {
    padding-top: 5%;
  }
}

.start {
  padding: 1rem;
}

.end {
  flex-grow: 9999;
  flex-direction: column;
}

.feedback {
  padding: 2em;
}
</style>