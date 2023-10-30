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
  <header>
    <nav class="nav container">
      <a class="nav-logo" href="#hero">UNIQUE TRIPS</a>
      <div class="nav-menu">
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#destinations">Destinos</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#contact">Contactanos</a></li>
        </ul>

        <router-link class="field-checkbox__label-3" to="/login">
          <button class="nav-btn">Abrir App</button>
        </router-link>
      </div>
      <button id="btn-menu" class="nav-btn-menu">=</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  width: 100%;
  height: 6rem;
  color: black;
  box-shadow: black 0 0 10px 0;
  line-height: 6rem;
  position: fixed;
  top: 0;
  z-index: 100;

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;

    .nav-logo {
      font-size: 2em;
    }

    .nav-menu {
      display: flex;
      gap: 3rem;

      .nav-links {
        display: flex;
        justify-content: space-between;
        gap: 3rem;

      }

      .nav-btn {
        background-color: #195fa4;
        color: #fff;
        border-radius: 10px;
        transition: background-color 0.2s ease-in-out;
        padding: 1rem;
        margin: auto;

        &:hover {
          background-color: black;
        }
      }
    }

    .nav-btn-menu {
      display: none;
      width: 4rem;
      height: 3rem;
      background-color: #222222;
      border-radius: 20px;
      color: white;
      font-size: 2.5em;
    }

  }
}

</style>