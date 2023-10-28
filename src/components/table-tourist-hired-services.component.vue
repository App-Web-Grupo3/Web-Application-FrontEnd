<script>
export default {
  data() {
    return {
      data: [
        {
          "Número del servicio": 8135264051946682,
          "Hora y fecha de la solicitud": "10:19 Jul. 11 2021",
          "Usuario": "Name",
          "Importe total": 500
        },
      ]
    };
  }
};
</script>

<template>
  <pv-datatable :value="data" tableStyle="min-width: 50rem">
    <pv-column field="Número del servicio"  header="Número del Servicio"></pv-column>
    <pv-column field="Hora y fecha de la solicitud" header="Hora y fecha de la solicitud"></pv-column>
    <pv-column field="Usuario" header="Usuario"></pv-column>
    <pv-column field="Importe total" header="Importe Total"></pv-column>
  </pv-datatable>
</template>


<style scoped>

</style>