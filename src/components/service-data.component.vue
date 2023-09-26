<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  service: Object
});
</script>

<template>
  <pv-card class="info" style="width: 500px">
    <template #title>{{ service.title }}</template>
    <template #subtitle> {{ $t('details') }} </template>
    <template #content>
      <p>{{ service.description }}</p>
      <br>
      <ul>
        <li><b>{{ $t('email') }}</b><p>{{ service.email }}</p></li>
        <li><b>{{ $t('phone') }}</b><p>{{ service.phone }}</p></li>
        <li><b>{{ $t('country') }}</b><p>{{ service.country }}</p></li>
      </ul>
    </template>
    <template #footer class="footer">
      <pv-button icon="pi pi-check" label="Guardar"
                 text class="btn"/>
      <pv-button icon="pi pi-times" label="Calcular" style="margin-left: 0.5em"
                 text class="btn"/>
      <pv-button icon="pi pi-times" label="Comprar" style="margin-left: 0.5em"
                 text class="btn"/>
    </template>
  </pv-card>
</template>

<style scoped>
.info {
  border-radius: 20px;
  box-shadow: none;
  padding: 0;
  .btn {
    background-color: var(--primary-color);
    color: white;
    font-size: 0.8em;
  }
}
</style>