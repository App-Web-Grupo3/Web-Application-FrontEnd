<script setup>
import { ref, defineProps } from "vue";
import CalculateServiceComponent from "@/components/calculate-service.component.vue";
import { useToast } from 'primevue/usetoast';

const props = defineProps({
  activity: Object,
  enterprise: Object,
});
const toast = useToast();
const successfulSaved = () => {
  toast.add({ severity: 'success', summary: 'Favorite',
    detail: 'Se añadió a lista de favoritos correctamente', life: 3000 });
};
</script>

<template>
  <pv-card class="info" style="width: 500px">
    <template #title>{{ activity.title }}</template>
    <template #subtitle> {{ $t('details') }} </template>
    <template #content>
      <p>{{ activity.description }}</p>
      <br>
      <ul>
        <li><b>{{ $t('email') }}</b><p>{{ enterprise.email }}</p></li>
        <li><b>{{ $t('phone') }}</b><p>{{ enterprise.phone }}</p></li>
      </ul>
    </template>
    <template #footer class="footer ">
      <div class="flex flex-wrap gap-2">
        <pv-toast />
        <pv-button class="btn" label="Guardar" @click="successfulSaved()" />
        <calculate-service-component></calculate-service-component>
        <pv-button class="btn" label="Comprar" @click="successfulSaved()" />
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