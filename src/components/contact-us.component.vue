<script>
export default {
  name: "ContactUsComponent"
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <h1 class="lp-title">Contact us!</h1>
        <h2 class="sub-title">Estamos aquí para ayudarte a descubrir nuevos lugares. Envíanos tus preguntas o
          comentarios y te responderemos a la brevedad.</h2>
        <form>
          <label for="nombre">Nombre:</label>
          <input id="nombre" name="nombre" required type="text">

          <label for="correo">Correo Electrónico:</label>
          <input id="correo" name="correo" required type="email">

          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required rows="4"></textarea>

          <button class="btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 9% 0;

  .contact-content {
    width: min(50rem, 100%);
    margin: auto;
    background-color: #f9f9f9;
    padding: 4rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .title {
      padding-bottom: 1rem;
    }

    .sub-title {
      font-size: 1.3em;
      padding-bottom: 2rem;
      text-align: center;
      color: #777;
    }

    & form {
      display: flex;
      flex-direction: column;
      align-items: center;

      & label {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 10px;
        text-align: left;
        width: 100%;
      }

      & input[type="text"],
      & input[type="email"],
      & textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
      }

      & textarea {
        resize: vertical;
        height: 150px;
      }

      & button[type="submit"] {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
      }

      & button[type="submit"]:hover {
        background-color: #555;
      }
    }


  }
}
</style>