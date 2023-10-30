<script setup>
import {ref} from "vue";

const visible = ref(false);
const value2 = ref(1);
</script>

<template>

    <router-link to="/service-info/:activityId">
        <div class="save">
            <pv-button class="btn" label="Mas Detalles"  @click="visible = true" />
        </div>
    </router-link>

</template>

<style scoped>
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