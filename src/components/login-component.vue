<script setup>
import { ref } from 'vue';

const mail = ref('');
const password = ref('');
const accept = ref(false);
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
        <pv-inputText id="mail" v-model="mail" type="text" placeholder="Correo electrónico" autofocus />
      </div>
      <div class="form-container__field">
        <div class="p-float-label">
          <pv-password v-model="password">
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
      <pv-button type="submit" label="INICIAR SESIÓN" class="form-container__button mt-2 mb-5" />
      <div class="field-checkbox">
        <pv-checkBox id="accept" v-model="accept" name="accept" value="Accept" />
        <label for="accept" class="field-checkbox__label-1">No cerrar sesión</label>
        <router-link to="/recovery-password" class="field-checkbox__label-3">¿Olvidaste tu contraseña?</router-link>
        <router-link to="/register" class="field-checkbox__label-2">¿No tienes una cuenta? Regístrate</router-link>
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
}

.divider2 {
  width: 90%;
  max-width: 440px;
  min-width: 200px;
  margin: 0 auto;
}

.divider2__content{
  margin: 40px;
}

.form-container__button{
  background-color: var(--primary-color);
  border-radius: 20px;
}

.form-container {
  padding: 20px;
  margin-top: 20px;
}

.form-container__field {
  margin-bottom: 15px;
  border: 2px solid rgba(0, 0, 255, 0.1);
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