<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([
  { label: 'Home', icon: 'pi pi-home', to: '/home'},
  { label: 'Profile', icon: 'pi pi-user', to: '/profile' },
  { label: 'Settings', icon: 'pi pi-cog', to: '/settings' },
  { separator: true },
  { label: 'Sign Out', icon: 'pi pi-sign-out', to: '/' }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const value1 = ref(null);
</script>

<template>
  <div class="navbar">
    <pv-toolbar class="navbar-container">
      <template #start>
        <div class="btn-menu">
          <pv-avatar icon="pi pi-user" class="mr-2" size="large" shape="circle"/>
          <pv-button type="button" icon="pi pi-bars" @click="toggle" aria-haspopup="true"
                     aria-controls="overlay_menu" class="btn" text rounded/>
          <pv-menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <div class="btn-chips flex gap-4">
          <pv-button id="my-purchases" class="btn" label="Mis compras" icon="pi pi-shopping-bag" text raised rounded/>
          <pv-button id="favorites" class="btn" label="Favoritos" icon="pi pi-bookmark-fill" text raised rounded/>
        </div>
      </template>
      <template #end>
      <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <pv-inputText v-model="value1" placeholder="Search" class="input-search"/>
      </span>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.navbar {
  background-color: var(--primary-color);
  border-radius: 0;
  box-shadow: 0 10px var(--secondary-color);
  .navbar-container {
    background-color: transparent;
    border: 0;
    max-width: 1500px;
    margin: 0 auto;
  }
}
.btn-menu {
  background-color: #fff;
  border-radius: 100px;
  padding: 0;
  .btn {
    color: #000;
  }
}
.btn-chips {
  padding-left: 2rem;
  .btn {
    background-color: #fff;
    padding: .2rem 1.5rem;
    color: #082944;
  }
}
.input-search {
  width: 25rem;
  border-radius: 20px;
  padding: .2rem 2.5rem;
}
</style>
