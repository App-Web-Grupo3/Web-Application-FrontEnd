<script>
export default {
  name: "HeaderComponent",
  methods: {
    scrollToSection(id) {
      let section = document.getElementById(id);
      if (section && section.id === id) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  data() {
    return {
      menuItems: [
        {
          label: this.$t('home'),
          icon: 'pi pi-home',
          command: () => this.scrollToSection('welcome')
        },
        {
          label: this.$t('destinations'),
          icon: 'pi pi-globe',
          to: '/destinations',
          command: () => this.scrollToSection('destinations')
        },
        {
          label: this.$t('login'),
          icon: 'pi pi-user',
          to: '/login'
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