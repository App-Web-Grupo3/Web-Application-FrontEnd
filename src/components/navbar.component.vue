<script setup>
import {ref} from "vue";

const menu = ref();
const items = ref([
  {label: 'Home', icon: 'pi pi-home', to: '/home'},
  {label: 'Profile', icon: 'pi pi-user', to: '/profile'},
  {label: 'Settings', icon: 'pi pi-cog', to: '/settings'},
  {separator: true},
  {label: 'Sign Out', icon: 'pi pi-sign-out', to: '/'}
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
          <pv-avatar class="mr-2" icon="pi pi-user" shape="circle" size="large"/>
          <pv-button aria-controls="overlay_menu" aria-haspopup="true" class="btn" icon="pi pi-bars"
                     rounded text type="button" @click="toggle"/>
          <pv-menu id="overlay_menu" ref="menu" :model="items" :popup="true"/>
        </div>
        <div class="btn-chips flex gap-4">
          <router-link class="field-checkbox__label-3" to="/en-home">
            <pv-button id="my-purchases" class="btn" icon="pi pi-shopping-bag" label="Mis compras" raised rounded text/>
          </router-link>
          <router-link class="field-checkbox__label-3" to="/home/favorite-service">
            <pv-button id="favorites" class="btn" icon="pi pi-bookmark-fill" label="Favoritos" raised rounded text/>
          </router-link>
        </div>
      </template>
      <template #end>
      <span class="p-input-icon-left">
          <i class="pi pi-search"/>
          <pv-inputText v-model="value1" class="input-search" placeholder="Search"/>
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