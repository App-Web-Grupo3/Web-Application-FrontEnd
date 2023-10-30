<script>
import FooterComponent from "@/components/footer.component.vue";

export default {
  name: "ContactUsComponent",
  components: {FooterComponent}
}
</script>

<template>

    <section class="contact-text">
      <h2 class="contact-text_title">¡Contáctanos!</h2>
      <p class="contact-text_paragraph">Estamos aquí para ayudarte a descubrir nuevos lugares. Envíanos tus preguntas o comentarios y te responderemos a la brevedad.</p>
      <form class="contact-form">
        <label class="contact-form__label" for="nombre">Nombre:</label>
        <pv-inputText class="contact-form__inputText" type="text" id="nombre" name="nombre" required/>
        <label class="contact-form__label" for="correo">Correo Electrónico:</label>
        <pv-inputText class="contact-form__inputText" type="email" id="correo" name="correo" required/>
        <label class="contact-form__label" for="mensaje">Mensaje:</label>
        <pv-textarea class="contact-form__textArea" id="mensaje" name="mensaje" rows="4" required></pv-textarea>
        <pv-button class="contact-form__button" type="submit">Enviar</pv-button>
      </form>
    </section>
  <footer-component></footer-component>
</template>

<style scoped>
.contact-text {
  background-color: #f9f9f9;
  padding: 40px;
  text-align: center;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-text_title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  margin-top: 40px;
  font-weight: bold;
}

.contact-text_paragraph {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-form__label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
}

.contact-form__inputText,
.contact-form__textArea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form__textArea {
  resize: vertical;
  height: 150px;
}

.contact-form__button{
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.contact-form__button:enabled:hover {
  background: #000;
  color: #ffffff;
  border-color: #4868d1;
}


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

</style>