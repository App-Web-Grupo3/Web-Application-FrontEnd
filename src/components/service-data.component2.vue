<script setup>
import { ref, defineProps } from "vue";
import CalculateServiceComponent2 from "@/components/calculate-service.component2.vue";
import { useToast } from 'primevue/usetoast';

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
  <pv-card class="info" style="width: 300px">
    <template #title>{{ service.title }}</template>
    <template #footer class="footer ">
      <div class="flex-flex-wrap-gap-2">
        <CalculateServiceComponent2></CalculateServiceComponent2>
      </div>
    </template>
  </pv-card>

</template>

<style scoped>
.info {
  border-radius: 0px;
  box-shadow: none;
  padding: 0;
}
.flex-flex-wrap-gap-2{
  display: flex;
  justify-content: center;
}

</style>
