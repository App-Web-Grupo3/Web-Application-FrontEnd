<script>
import { UserApiService } from "@/services/user-api.service";
import FooterComponent from "@/components/footer.component.vue";


export default {
  name: "LoginComponent",
  components: {FooterComponent},
  data() {
    return {
      user: {
        Mail: "",
        Password: "",
      }
    };
  },
  created() {
    this.userApi = new UserApiService();
  },
  methods: {
    login() {
      const user = {
        Mail: this.user.Mail,
        Password: this.user.Password,
      };

      this.userApi
          .login(user)
          .then((response) => {
            if (response && response.data) {
              const accessToken = response.data.accessToken;

              if (accessToken) {
                const user = response.data.user;
                localStorage.setItem('user', JSON.stringify(user));
                if (response.data.SelectedRole === 'Representative') {
                  this.$router.push('en-home');
                  console.log('Esta es una empresa');
                } else {
                  this.$router.push('services-offers');
                  console.log('Este es un turista');
                }
                console.log(response.data.accessToken)
                console.log(response.data)
                alert("Usuario creado")
              } else {
                alert("Token de acceso no encontrado en la respuesta del servidor");
              }
            } else {
              alert("Respuesta del servidor indefinida");
            }
          })
          .catch((error) => {
            console.error("Error en el inicio de sesión:", error);

            if (error.response) {
              console.error("Respuesta del servidor:", error.response.data);
            }
          });
    }
  }
};
</script>

<template>
  <pv-divider class="divider"></pv-divider>

  <div class="text-container">
    <div class="text-container__title">Bienvenido</div>
  </div>
  <pv-divider align="center" class="divider2 mt-4"><b class="divider2__content">o</b></pv-divider>
  <div class="flex justify-content-center p-fluid">
    <div v-focustrap class="card form-container">
      <div class="form-container__field">

        <pv-inputText id="email" v-model="user.Mail" type="text" placeholder="Correo electrónico" autofocus />
      </div>
      <div class="form-container__field">
        <pv-inputText id="password" v-model="user.Password" type="password" placeholder="Contraseña"/>
      </div>
      <pv-button @click="login()" type="submit" label="INICIAR SESIÓN" class="form-container__button mt-2 mb-5" />

      <div class="field-checkbox">
        <pv-checkBox id="accept" name="accept" value="Accept"/>
        <label class="field-checkbox__label-1" for="accept">No cerrar sesión</label>
        <router-link class="field-checkbox__label-3" to="/recovery-password">¿Olvidaste tu contraseña?</router-link>
        <router-link class="field-checkbox__label-2" to="/register">¿No tienes una cuenta? Regístrate</router-link>
      </div>
    </div>
  </div>
<footer-component></footer-component>
</template>

<style scoped>

.divider {
  padding: 8vh;
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 450px;
  width: 90%;
  padding: 10px;
  box-sizing: border-box;
}

.text-container__title {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
}

.divider2 {
  width: 90%;
  max-width: 440px;
  min-width: 200px;
  margin: 0 auto;
}

.divider2__content {
  margin: 40px;
  font-weight: normal;
}

.form-container__button {
  background-color: var(--primary-color);
  border-radius: 20px;
}

.form-container {
  padding: 20px;
  margin-top: 20px;
}

.form-container__field {
  margin-bottom: 15px;
}

.field-checkbox {
  height: 150px;
  align-items: start;
  font-weight: bold;
  font-size: 13px;
}

.field-checkbox__label-1 {
  order: 1;
  text-align: center;
}

.field-checkbox__label-2 {
  order: 2;
  text-align: center;
  align-self: center;
}

.field-checkbox__label-3 {
  order: 3;
  text-align: center;
}

</style>