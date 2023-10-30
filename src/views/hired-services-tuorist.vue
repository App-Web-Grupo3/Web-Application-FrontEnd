<script setup>
import NavbarComponent from '../components/navbar.component.vue';
import TouristProfileComponent from "@/components/tourist-profile.component.vue";
import FooterComponent from "@/components/footer.component.vue";
import TableComponent from "@/components/table-tourist-hired-services.component.vue";
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
            <div class="button-table-container">
              <pv-button label="Información" class="button-information"> </pv-button>
              <pv-button label="Acciones" class="button-actions"> </pv-button>
              <table-component> </table-component>
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
  .button-information {
    width: 700px;
    background-color: #5094b4;
  }
  .button-actions {
    width: 200px;
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