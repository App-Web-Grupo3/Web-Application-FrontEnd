<script setup>

</script>

<template>
  <pv-datatable :value="products" tableStyle="min-width: 50rem">
    <pv-column field="name_user" header="Nombre de Usuario"></pv-column>
    <pv-column field="mail" header="Correo"></pv-column>
    <pv-column field="phone" header="Telefono"></pv-column>
    <pv-column field="person" header="Personas"></pv-column>
    <pv-column field="departure_date" header="Fecha de salida"></pv-column>
    <pv-column field="amount" header="Monto"></pv-column>
  </pv-datatable>
</template>

<style scoped>

</style>