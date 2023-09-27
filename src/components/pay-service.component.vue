<script setup>
import { ref } from "vue";

const visible = ref(false);
const value2 = ref(1);

</script>

<template>
  <div class="save">
    <pv-button class="btn" label="Pagar Oferta"  @click="visible = true" />
    <pv-dialog v-model:visible="visible" modal header="Pagar Servicio" :style="{ width: '20rem' }"
               :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
      <div class="flex-auto">
        <pv-inputNumber class="input-number" v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
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
  width: 100%;
}
.input-mask {
  width: 100%;
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