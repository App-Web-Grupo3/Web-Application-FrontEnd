<script>
import { UserApiService } from "@/services/user-api.service";

export default {
  name: "RegisterComponent",
  data() {
    return {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      selectedOption: "",
      userApi: new UserApiService()
    };
  },
  methods: {
    create() {
      const body = {
        name: this.name,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        selectedOption: this.selectedOption
      };

      this.userApi.register(body).then((response) => {
        localStorage.setItem("selectedOption", this.selectedOption);
        if (response.status === 201) {
          alert("User Created");
        } else {
          alert("User not created, contact administrator");
        }
      });
    },
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<template>
  <pv-divider class="divider"></pv-divider>

  <div class="text-container">
    <div class="text-container__title">Únete a Unique Trips</div>
  </div>
  <pv-divider align="center" class="divider2 mt-4">
    <div class="radio-row">
      <div class="radio-row__left">
        <div class="radio-row__container flex align-items-center">
          <pv-radioButton id="radioButton1" name="radioGroup" value="Turista" label="Turista" v-model="selectedOption" @click="selectOption('Turista')"/>
          <label class="ml-2">Turista</label>
        </div>
      </div>
    </div>
      <div class="divider-overlay">
        <div class="divider-overlay__content">o</div>
      </div>
    <div class="radio-row">
      <div class="radio-row__right">
        <div class="radio-row__container flex align-items-center">
          <pv-radioButton id="radioButton2" name="radioGroup" value="Empresa" label="Empresa" v-model="selectedOption" @click="selectOption('Empresa')"/>
          <label class="ml-2">Empresa</label>
        </div>
      </div>
    </div>
  </pv-divider>
  <div class="flex justify-content-center p-fluid">
    <div v-focustrap class="card form-container">
      <div class="form-container__field">
        <div class="form-container__name-field">
          <pv-inputText id="name" v-model="name" type="text" placeholder="Nombre" autofocus />
          <pv-inputText id="lastName" v-model="lastname" type="text" placeholder="Apellido"  />
        </div>
      </div>
      <div class="form-container__field">
        <pv-inputText id="phone" v-model="phone" type="text" placeholder="Teléfono"/>
      </div>
      <div class="form-container__field">
        <pv-inputText id="mail" v-model="email" type="text" placeholder="Correo electrónico"/>
      </div>
      <div class="form-container__field">
        <div class="p-float-label">
          <pv-password v-model="password" type="password">
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer>
              <pv-divider />
              <p class="mt-2">Suggestions</p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </pv-password>
          <label for="password">Contraseña</label>
        </div>
      </div>
      <pv-button @click="create()" type="submit" label="REGISTRARME" class="form-container__button mt-4 mb-5" />
      <div class="field-footer">
        <label class="field-footer__label-1">No te enviaremos spam. Valoramos tu privacidad</label>
        <router-link to="/login" class="field-footer__label-2">¿Ya tienes una cuenta? Iniciar Sesión</router-link>
        <label class="field-footer__label-3">Al registrarte, aceptas las Condiciones del Servicio y la Política de Privacidad de UniqueTrips</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider{
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
  margin-bottom: 40px;
}

.divider2 {
  width: 90%;
  max-width: 550px;
  min-width: 180px;
  margin: 0 auto;
}
.radio-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.radio-row__left {
  flex: 1;
  margin-right: 300px;
}

.radio-row__right {
  flex: 1;
  justify-content: flex-end;
  margin-left: 300px;
}

.radio-row__container {
  margin-top: -40px;
}

.divider-overlay {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.divider-overlay__content {
  background-color: var(--bg-body-color);
  padding: 20px;
}

.form-container {
  padding: 20px;
  margin-top: 20px;
}

.form-container__field {
  margin-bottom: 15px;
}

.form-container__name-field {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
}

.form-container__button{
  background-color: var(--primary-color);
  border-radius: 20px;
}

.field-footer {
  height: 150px;
  align-items: start;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
}

.field-footer__label-1 {
  order: 1;
  margin: 15px;
  color: var(--secondary-color);
}

.field-footer__label-2 {
  order: 2;
  font-size: 15px;
  margin: 15px;
  text-decoration: underline;
}

.field-footer__label-3 {
  order: 3;
  margin: 15px;
}

@media (max-width: 430px) {
  .radio-row__left {
    flex: 1;
    margin-right: 200px;
  }

  .radio-row__right {
    flex: 1;
    justify-content: flex-end;
    margin-left: 200px;
  }
}

@media (max-width: 350px) {
  .radio-row__left {
    flex: 1;
    margin-right: 150px;
  }

  .radio-row__right {
    flex: 1;
    justify-content: flex-end;
    margin-left: 150px;
  }

}

</style>