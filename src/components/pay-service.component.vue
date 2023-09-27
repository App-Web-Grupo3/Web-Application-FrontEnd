<script setup>
import { ref } from 'vue';

const value = ref('');
const value2 = ref(1);
const value3 = ref('');
const visible = ref(false);
const value4 = ref(null);

</script>

<template>
  <div class="save">
    <pv-button class="btn" label="Pagar Oferta"  @click="visible = true" />
    <pv-dialog v-model:visible="visible" modal header="Pagar Servicio" :style="{ width: '40rem' }"
               :breakpoints="{ '960px': '75vw', '641px': '100vw' }">

      <h1> Servicio Seleccionado </h1>

      <pv-card class="tourist-profile" style="width: 35rem">

        <template #content>
          <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg" alt="servicio 1" style="width: 15rem">
          <h1 > Alpinismo para principiantes en el Huascarán, se parte de la aventura de vivir  </h1>
          <ul>
            <li><b>Por:</b><p>agencia TravelNew</p></li>
            <b>Fecha de Salida: </b><p>12/05/2023</p>
            <b>Total de Importe: </b><p></p>
            <div class="flex-auto">
              <b>Total de personas: </b> <pv-inputNumber class="input-number" v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
            </div>
          </ul>



        </template>
      </pv-card>

      <h1> Métodos de Pago </h1>
      <div class="card flex flex-wrap justify-content-left gap-3">
        <span class="p-input-icon-left">
            <pv-inputText class= "pay" v-model="value4" placeholder="Numero de tarjeta debito/credito" />
            </span>
      </div>

      <div class="card flex flex-wrap justify-content-left gap-3">
        <span class="p-input-icon-left">
            <pv-inputText class= "pay" v-model="value4" placeholder="Nombre del titular de la cuenta" />
            </span>
      </div>

      <pv-button class="btn-calculate btn" label="Aplicar" @click="visible = false" />
    </pv-dialog>
  </div>
</template>

<style scoped>
.btn {
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8em;
}
.input-number {
  width: 40%;
}
.pay {
  width: 200%;
}
.discount {
  font-size: 0.8em;
  margin: 1em 0;
}
.btn-calculate {
  width: 100%;
  margin: 1em 0;
}
ul {
  padding-top: 1rem;
}
ul li {
  font-size: 0.9em;
}
.total {
  font-size: 1.5em;

}
</style>