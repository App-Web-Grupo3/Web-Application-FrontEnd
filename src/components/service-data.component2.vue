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
      <router-link :to="'/home/activities/' + service.id">
        <div class="save">
          <pv-button class="btn" label="Mas Detalles"/>
        </div>
      </router-link>
    </template>
  </pv-card>

</template>

<style scoped>
.info {
  border-radius: 0px;
  box-shadow: none;
  padding: 0;
}
.save {
  display: flex;
  justify-content: center;
}
.btn {
  background-color: var(--primary-color);
  color: white;
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 50px;
}

ul {
  padding-top: 1rem;
}

ul li {
  font-size: 0.9em;
}

.save {
  padding: 10px;

}
</style>
