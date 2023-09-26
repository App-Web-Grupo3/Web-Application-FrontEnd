<script setup>

</script>

<template>
  <pv-card class="tourist-profile" style="width: 18rem">
    <template #header>
      <img alt="user" src="https://primefaces.org/cdn/primevue/images/usercard.png" class="user-img"/>
    </template>
    <template #title> Maria Becerra </template>
    <template #content>
      <p>
        Aventurera en busca de nuevas experiencias. Mi pasión es explorar lugares lejanos y cercanos,
        sumergirme en culturas diversas y capturar recuerdos en cada rincón del planeta. #ViajeroIncansable #MundoPorDescubrir
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-user-edit" label="Editar informacion" rounded class="edit-btn"/>
    </template>
  </pv-card>
</template>

<style scoped>
.tourist-profile {
  border-radius: 20px;
  padding: 0;
  box-shadow: none;
  .user-img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: 1rem auto;
  }
  .edit-btn {
    width: 100%;
    background-color: var(--primary-color);
  }
}
</style>