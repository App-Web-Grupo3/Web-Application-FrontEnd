<script setup>
import { ref } from 'vue';
import NavbarComponent from '../components/navbar.component.vue';
import TouristProfileComponent from "@/components/tourist-profile.component.vue";
import FooterComponent from "@/components/footer.component.vue";
import TableComponent from "@/components/table-company-hired-services.component.vue";

const services = ref([
  { label: "Expedición para alpinistas en El Huascarán. Oferta limitada por temporada", showTable: false },
  { label: "Viaje ida y vuelta a los tubulares de Ica. Oferta limitada por temporada", showTable: false },
  { label: "Recorrido por la ciudadela de Machu Picchu. Oferta limitada por temporada", showTable: false },
]);

const toggleTable = (index) => {
  services.value[index].showTable = !services.value[index].showTable;
};
</script>

<template>
  <div class="service-info">
    <navbar-component></navbar-component>

    <div class="container flex gap-8">
      <div class="start layout" style="flex-grow: 1">
        <tourist-profile-component></tourist-profile-component>
      </div>
      <div class="end flex gap-5" style="flex-grow: 9999">
        <div class="info layout">
          <h1 class="title">{{ $t('Servicios Contratados') }}</h1>
          <div class="info-tables">
            <div v-for="(service, index) in services" :key="index" class="button-table-container">
              <pv-button
                  @click="toggleTable(index)"
                  :label="service.label"
                  class="button-expedition"
              />
              <table-component v-if="service.showTable"></table-component>
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #EDEDED;
  .container {
    flex: 1;
    padding-top: 5%;
  }
  .end {
    flex-direction: column;
  }
  .button-expedition {
    width: 100%;
    display: block;
    background-color: #5094b4;
  }
  .info-tables {
    display: flex;
    flex-direction: column;
  }
  .button-table-container {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .button-table-container {
      margin-bottom: 10px;
    }
  }
}
</style>