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
        <h1 style="font-size: 30px;"><b>¡El pago a sido realizado con exito!</b> </h1>
      </div>

      <pv-card class="tourist-profile" style="width: 45rem">

        <template #content>
          <div class="content flex gap-5 justify-content-between align-items-center">
            <galleria-component></galleria-component>
            <h1 > Alpinismo para principiantes en el Huascarán, se parte de la aventura de vivir  </h1>
            <ul>
              <li><b>Por:</b><p>agencia TravelNew</p></li>
              <li><b>Fecha de Salida: </b><p>12/05/2023</p></li>
              <li><b>Total de Importe: </b><p>$500.00</p></li>
              <div class="flex-auto">
                <b>Total de personas: </b> <pv-inputNumber class="input-number" v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
              </div>
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