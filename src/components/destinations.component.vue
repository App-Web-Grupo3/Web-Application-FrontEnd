<script>
export default {
  name: "DestinationsComponent",
}
</script>

<template>
  <section id="destinations" class="destin">
    <div class="container">
      <h1 class="lp-title">Popular Destinations</h1>
      <div class="destin-content">
        <div class="lp-card">
          <img alt="La Montaña de Siete Colores" src="https://picsum.photos/id/1015/400/300">
          <div class="info">
            <h2>La Montaña de Siete Colores, Perú</h2>
            <p>Admira los colores vibrantes de la cordillera de los Andes</p>
            <a class="lp-btn" href="#">Ver más</a>
          </div>
        </div>
        <div class="lp-card">
          <img alt="Choquequirao" src="https://picsum.photos/id/1024/400/300">
          <div class="info">
            <h2>Choquequirao, Perú</h2>
            <p>Descubre las ruinas incas más impresionantes en los Andes peruanos</p>
            <a class="lp-btn" href="#">Ver más</a>
          </div>
        </div>
        <div class="lp-card">
          <img alt="Laguna de los Cóndores" src="https://picsum.photos/id/1018/400/300">
          <div class="info">
            <h2>Laguna de los Cóndores, Perú</h2>
            <p>Explora la reserva natural y admira la belleza de la fauna y flora local</p>
            <a class="lp-btn" href="#">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonials" class="testi">
    <div class="container">
      <h1 class="lp-title">User Testimonials</h1>
      <div class="testi-content">
        <div class="lp-card">
          <p class="comment">"¡Mi viaje con Unique Trips fue increíble! Descubrí lugares asombrosos que nunca hubiera
            encontrado por mi cuenta."</p>
          <p class="user">- Juan Pérez</p>
        </div>
        <div class="lp-card">
          <p class="comment">"La agencia de viajes Unique Trips superó mis expectativas. Viajar nunca fue tan sencillo y
            emocionante."</p>
          <p class="user">- María González</p>
        </div>
        <div class="lp-card">
          <p class="comment">"La agencia de viajes Unique Trips superó mis expectativas. Viajar nunca fue tan sencillo y
            emocionante."</p>
          <p class="user">- María González</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.destin {
  padding-top: 9%;

  .destin-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .lp-card {
      max-width: min(30rem, 100%);

      & img {
        width: 100%;
        border-radius: 10px 10px 0 0;
      }

      .info {
        padding: 1.5rem;
        text-align: center;

        & h2 {
          font-size: 1.5em;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        & p {
          font-size: 1em;
          color: #777;
          width: 70%;
          margin: 0 auto;
        }
      }
    }
  }
}

.testi {
  .testi-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    .lp-card {
      padding: 1rem;
      max-width: 40rem;

      .comment {
        font-size: 1.2em;
        margin-bottom: 1rem;
      }

      .user {
        font-size: 1em;
        color: #777;
      }
    }
  }
}
</style>