<script>
export default {
  name: "HomeWelcomeComponent"
}
</script>

<template>

  <section class="welcome" id="welcome">
    <div class="welcome__container">
      <h2 class="welcome__title">Bienvenido a UniqueTrips</h2>
      <p class="welcome__paragraph"> Explora destinos nuevos y emocionantes con nuestra agencia de viajes</p>

    </div>
  </section>
</template>

<style scoped>

.hero {
  background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }

  .hero-content {
    height: 40rem;
    display: grid;
    place-content: center;
    text-align: center;
    color: #fff;
    position: relative;
    z-index: 10;

    & h1 {
      font-size: 5em;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    & p {
      font-size: 1.5rem;
      width: 60%;
      margin: 0 auto;
    }
  }
}

</style>