<script setup>

</script>

<template>
  <pv-card class="tourist-profile" style="width: 20em">
    <template #header>
      <img alt="user" src="https://primefaces.org/cdn/primevue/images/usercard.png" class="user-img"/>
    </template>
    <template #title> Maria Becerra </template>
    <template #content>
      <p>
       Una vez me desperté, no estabas más a mi lado, pensé que suerte por fin esta historia se ha acabado, luego me desenvolví y no te dije ni sorry baby
        y ahora estoy ganando más que tu con sola una history. #ViajeraIncansable #MundoPorDescubrir
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
  .user-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    clip-path: circle();
  }
  .edit-btn {
    width: 100%;
    background-color: var(--primary-color);
  }
}
</style>