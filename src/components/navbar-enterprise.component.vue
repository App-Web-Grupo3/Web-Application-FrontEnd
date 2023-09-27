<script setup>
import {ref} from "vue";

const menu = ref();
const items = ref([
  {label: 'Home', icon: 'pi pi-home', to: '/enterprise/home'},
  {label: 'Profile', icon: 'pi pi-user', to: '/enterprise/profile'},
  {label: 'Settings', icon: 'pi pi-cog', to: '/enterprise/settings'},
  {separator: true},
  {label: 'Sign Out', icon: 'pi pi-sign-out', to: '/'}
]);

const toggle = (event) => {
  menu.value.toggle(event);
  console.log('toggle');
};


const valueSearch = ref();
</script>

<template>
  <div class="navbar">
    <pv-toolbar class="navbar-container container">
      <template #start>
        <div class="btn-menu">
          <pv-avatar class="mr-2" icon="pi pi-user" shape="circle" size="large"/>
          <pv-button aria-controls="overlay_menu" aria-haspopup="true" class="btn" icon="pi pi-bars"
                     rounded text type="button" @click="toggle"/>
          <pv-menu id="overlay_menu" ref="menu" :model="items" :popup="true" class="menu"/>
        </div>
      </template>
      <template #end>
      <span class="p-input-icon-left">
          <i class="pi pi-search"/>
          <pv-inputText v-model="valueSearch" class="input-search" placeholder="Search"/>
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
    padding: 1rem 2rem;
  }
}

.btn-menu {
  background-color: #fff;
  border-radius: 100px;

  .btn {
    color: #000;
  }

}

.input-search {
  width: 25rem;
  border-radius: 20px;
  padding: .2rem 2.5rem;
}

@media (max-width: 1000px) and (min-width: 0px) {
  .input-search {
    width: 100%;
  }
}
</style>