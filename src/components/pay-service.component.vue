<script setup>
import { ref } from 'vue';
import DataFavoritesComponent from "@/components/services-data-favorites.component.vue";
import GalleriaComponent from "@/components/services-galleria.component.vue";
import  SuccessfulPaymentComponent from "@/components/successful-payment.component.vue";

const value = ref('');
const value2 = ref(1);
const value3 = ref(null);
const value4 = ref(null);
const visible = ref(false);
</script>

<template>
  <div class="save">

    <pv-button class="btn" label="Pagar Oferta"  @click="visible = true" />


    <pv-dialog v-model:visible="visible" modal header="Pagar Servicio" :style="{ width: '50rem' }"
               :breakpoints="{ '960px': '75vw', '641px': '100vw' }">

      <h1> Servicio Seleccionado </h1>

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
      <br><h1> Métodos de Pago </h1><br>
      <div class="card flex flex-wrap justify-content-left gap-3">
        <span class="p-input-icon-left">
            <pv-inputText class= "pay" v-model="value3" placeholder="Numero de tarjeta debito/credito" />
            </span>
      </div>

      <div class="card flex flex-wrap justify-content-left gap-3">
        <span class="p-input-icon-left">
            <pv-inputText class= "pay" v-model="value4" placeholder="Nombre del titular de la cuenta" />
            </span>
      </div>

      <div class="card flex flex-wrap justify-content-left gap-3">
        <span class="p-input-icon-left">
            <pv-inputText class= "pay" v-model="value4" placeholder="MM/AA" />
            </span>
      </div>

      <div class="card flex flex-wrap justify-content-left gap-3">
        <span class="p-input-icon-left">
            <pv-inputText class= "pay" v-model="value4" placeholder="CVC/CVV" />
            </span>
      </div>

      <successful-payment-component></successful-payment-component>
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
  width: 80%;
}
.pay {
  width: 290%;
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
.galleria {
  overflow: hidden;
  border-radius: 20px;
}
.total {
  font-size: 1.5em;

}
</style>