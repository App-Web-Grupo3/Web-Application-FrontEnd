<script>
export default {
  name: "DestinationsComponent",
}
</script>

<template>
  <section class="destinations">
    <h2 class="destinations__title">Destinos populares</h2>
    <div class="destinations__container">
      <div class="destination">
        <img alt="La Montaña de Siete Colores" class="destination__img" src="https://picsum.photos/id/1015/400/300">
        <h3 class="destination__title">La Montaña de Siete Colores, Perú</h3>
        <p class="destination__paragraph">Admira los colores vibrantes de la cordillera de los Andes</p>
        <pv-button class="btn" href="#">Comprar</pv-button>
      </div>
      <div class="destination">
        <img alt="Choquequirao" class="destination__img" src="https://picsum.photos/id/1024/400/300">
        <h3 class="destination__title">Choquequirao, Perú</h3>
        <p class="destination__paragraph">Descubre las ruinas incas más impresionantes en los Andes peruanos</p>
        <pv-button class="btn" href="#">Comprar</pv-button>
      </div>
      <div class="destination">
        <img alt="Laguna de los Cóndores" class="destination__img" src="https://picsum.photos/id/1018/400/300">
        <h3 class="destination__title">Laguna de los Cóndores, Perú</h3>
        <p class="destination__paragraph">Explora la reserva natural y admira la belleza de la fauna y flora local</p>
        <pv-button class="btn" href="#">Comprar</pv-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.destinations {
  background-color: #f5f5f5;
  padding: 80px 0;
  text-align: center;
  margin: 30px;
}

.destinations__title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.destinations__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.destination {
  width: 30%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.destination__img {
  width: 100vw;
  border-radius: 10px;
}

.destination__title {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

.destination__paragraph {
  color: #777;
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px solid transparent;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  outline: none;
}

.btn.p-button:not(.p-disabled):hover {
  background-color: #555;
  border: 2px solid transparent;
}

.btn.p-button:focus,
.p-button:focus {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
}

@media screen and (max-width: 900px) {
  .destination {
    width: 100%;
  }

  .destination__img {
    width: 80vw;
    border-radius: 10px;
  }

  .destination__title {
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .destination__paragraph {
    color: #777;
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .btn {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
  }
}

@media screen and (min-width: 900px) {
  .destinations__container {
    justify-content: center;
    width: 100%;
  }

  .destination {
    width: 30vw;
    margin: 0 10px 50px 10px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .destination__img {
    width: 100%;
    border-radius: 10px;
  }

  .btn {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
  }
}

</style>