<script setup>
import GalleriaComponent from "@/components/services-galleria.component.vue";
import { ref } from 'vue';
const visible = ref(false);
</script>

<template>
  <div class="save">
    <pv-button class="btn-pay" label="Pagar"  @click="visible = true " />
    <pv-dialog v-model:visible="visible" modal header="Pagar Servicio" :style="{ width: '50rem' }"
               :breakpoints="{ '960px': '75vw', '641px': '100vw' }">

      <div class="contenedor">
        <h1 style="font-size: 30px;"><b>¡El pago ha sido realizado con exito!</b> </h1>
      </div>

      <pv-card class="tourist-profile" style="width: 45rem">

        <template #content>
          <div class="content flex gap-5 justify-content-between align-items-center">
            <galleria-component></galleria-component>
            <p> Alpinismo para principiantes en el Huascarán, se parte de la aventura de vivir  </p>
            <br><b>Por:</b><p>agencia TravelNew</p>
            <ul>
              <li><b>Fecha de Salida: </b><p>12/05/2023</p></li>
              <li><b>Total de Importe: </b><p>$500.00</p></li>
              <li><b>Total de personas: </b><p>2</p></li>
            </ul>
          </div>

        </template>
      </pv-card>

      <pv-button class="btn-pay" label="Aceptar" @click="visible = false" />
    </pv-dialog>
  </div>
</template>

<style scoped>
.btn-pay {
  width: 100%;
  margin: 1em 0;
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8em;
}
.contenedor {
  text-align: center;
}
</style>