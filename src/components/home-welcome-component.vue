<script>
export default {
  name: "HomeWelcomeComponent"
}
</script>

<template>
  <section class="welcome">
    <div class="welcome__container">
      <h2 class="welcome__title">Bienvenido a Unique Trips</h2>
      <p class="welcome__paragraph"> Explora destinos nuevos y emocionantes con nuestra agencia de viajes</p>
    </div>
  </section>
</template>

<style scoped>

.welcome {
  background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome__title {
  font-size: 4rem;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
}

.welcome__paragraph {
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: white;
  text-align: center;
}

@media screen and (max-width: 900px) {
  .welcome__title {
    font-size: 3rem;
  }

  .welcome__paragraph {
    font-size: 2rem;
    margin: 0 30px;
  }
}

</style>