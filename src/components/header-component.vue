<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuItems: [
        {
          label: this.$t('home'),
          icon: 'pi pi-home',
          to: '/'
        },
        {
          label: this.$t('destinations'),
          icon: 'pi pi-globe',
          to: '/destinations'
        },
        {
          label: this.$t('login'),
          icon: 'pi pi-user',
          to: '/login'
        },
        {
          label: this.$t('myProfile'),
          icon: 'pi pi-user-edit',
          to: '/my-profile'
        },
        {
          label: this.$t('contactUs'),
          icon: 'pi pi-envelope',
          to: '/contact-us'
        }
      ]
    };
  }
};
</script>

<template>
  <pv-menubar :model="menuItems" class="nav">
    <template #start>
      <a class="logo">UNIQUETRIPS</a>
    </template>
  </pv-menubar>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  width: 100%;
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #333;
  text-decoration: none;
}

</style>