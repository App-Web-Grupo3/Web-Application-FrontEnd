<script setup>
import NavbarComponent from '../components/navbar.component.vue';
import TouristProfileComponent from "@/components/tourist-profile.component.vue";
import FooterComponent from "@/components/footer-component.vue";
import GalleriaComponent2 from "@/components/services-galleria.component2.vue";
import ServiceDataComponent2 from "@/components/service-data.component2.vue";
import {ref} from "vue";

const services = ref([
  {
    title: "Disfruta con Peruvian Andes Adventures en el nevado Auzangate",
  },
  {
    title: "Época de escalamiento en Huandoy, alpinismo para principiantes",
  },
  {
    title: "Disfruta de una aventura en la montaña de Huascarán",
  },
  {
    title: "Época de escalamiento en Huandoy, alpinismo para principiantes",
  },
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
        <div class="info layout">
          <h2 class="title">{{ $t('service') }}</h2>
          <pv-button class="btn" label="Ofertas"  @click="visible = true" />
          <div class="flex wrap-gap">
            <div class="grid-components" v-for="(service, index) in services" :key="index">
              <div class="grid-item">
                <GalleriaComponent2></GalleriaComponent2>
                <ServiceDataComponent2 :service="service"></ServiceDataComponent2>
              </div>
            </div>
          </div>
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

.grid-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajusta el número de columnas según el espacio disponible */
  gap: 1rem; /* Espacio entre columnas y filas */
  padding: 10px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espacio entre galleria y service-data */
}
.btn {
  background-color: var(--primary-color);
  color: white;
  font-size: 1em;
  padding: 10px 30px;
  border-radius: 50px;
}

@media screen and (max-width: 768px) {
  .wrap-gap {
    flex-direction: column; /* Cambia a dirección de columna en pantallas pequeñas */
  }
}
</style>

