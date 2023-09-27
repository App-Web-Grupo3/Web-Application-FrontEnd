<script setup>
import { ref, defineProps } from "vue";
import CalculateServiceComponent from "@/components/calculate-service.component.vue";
import { useToast } from 'primevue/usetoast';
import PayServiceComponent from "@/components/pay-service.component.vue";

const props = defineProps({
  service: Object
});
const toast = useToast();
const successfulSaved = () => {
  toast.add({ severity: 'success', summary: 'Favorite',
    detail: 'Se añadió a lista de favoritos correctamente', life: 3000 });
};
</script>

<template>
  <pv-card class="info" style="width: 500px">
    <template #title>{{ service.title }}</template>
    <template #content>
      <p>{{ service.description }}</p>
      <br>
      <ul>
        <li><b>{{ $t('by') }}</b><p>{{ service.by }}</p></li>
        <li><b>{{ $t('cost') }}</b><p>{{ service.cost }}</p></li>
      </ul>
    </template>
    <template #footer class="footer ">
      <div class="flex flex-wrap gap-2">
        <pv-toast />
        <calculate-service-component></calculate-service-component>
        <pay-service-component></pay-service-component>
      </div>
    </template>
  </pv-card>

</template>

<style scoped>
.info {
  border-radius: 20px;
  box-shadow: none;
  padding: 0;
}

.btn {
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8em;
}
</style>