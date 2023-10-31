
<script>
import { UserApiService } from "@/services/user-api.service";
import FooterComponent from "@/components/footer.component.vue";


export default {
  name: "LoginComponent",
  components: {FooterComponent},
  data() {
    return {
      email: "",
      password: "",
      accept: false,
      userApi: new UserApiService()
    };
  },
  methods: {
    login() {
      const body = {
        email: this.email,
        password: this.password,
        accept: this.accept
      };

      this.userApi.login(body).then((response) => {
        if (response.data.accessToken){
          if(response.data.user.selectedOption === 'Empresa'){
            this.$router.push("/en-home");
            console.log('Esta es una empresa')
          }else {
            this.$router.push("/home");
            console.log('Este es un turista')
          }
          localStorage.setItem('user', JSON.stringify(response.data.user));
          /*const type = localStorage.getItem("selectedOption");
          sessionStorage.setItem("accessToken", response.data.accessToken);
          this.$router.push("/enterprise/home");*/
        } else alert("Error en usuario y/o password");
      })
          .catch((error) => {
            alert("Error en usuario y/o password");
          });
    },
  },
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

        <pv-inputText id="email" v-model="email" type="text" placeholder="Correo electrónico" autofocus />
      </div>
      <div class="form-container__field">
        <pv-inputText id="password" v-model="password" type="password" placeholder="Contraseña"/>
      </div>
      <pv-button @click="login()" type="submit" label="INICIAR SESIÓN" class="form-container__button mt-2 mb-5" />

      <div class="field-checkbox">
        <pv-checkBox id="accept" v-model="accept" name="accept" value="Accept"/>
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