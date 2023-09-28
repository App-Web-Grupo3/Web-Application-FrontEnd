<script>
import NavbarEnterpriseComponent from "@/components/navbar-enterprise.component.vue";

export default {
  name: "AddServiceComponent",
  components: {
    NavbarEnterpriseComponent,
  },
  data() {
    return {
      title: '',
      description: '',
      discount: 'No',
      discountValue: 0,
      discountPer: 0,
      number: 0,
      precio: 0,


      visibleAddService: false
    }
  },
  methods: {
    onAdvancedUpload() {
      this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
    }
  }
}
</script>

<template>

  <div class="div-prin view">
    <navbar-enterprise-component></navbar-enterprise-component>
    <div class="container flex gap-5">
      <div class="desc box-decorator layout">
        <div class="img-logo">
          <img alt="logo" src="https://acortar.link/vFAsSK" style="width: 70%">
        </div>
        <div class="contenido-empresa font-size">
          <p class="sub">TravelNew</p>
          <p class="negrita">travelnew@gmailcom</p>
          <p class="curvo">Somos una empresa de transporte publico que realiza viajes dentro del país sin descuidar la
            seguridad y comodidad al cliente.</p>

          <div class="descripcionAdicional">

            <p class="negrita">Ubicación</p>
            <p> Maecenas ultricies, InNulla.</p>
            <p class="negrita">Ruc</p>
            <p>641478521</p>
            <p class="negrita">Teléfono</p>
            <p>+51 952364789 </p>

          </div>


        </div>

      </div>
      <div class="form box-decorator layout">
        <h1 class="title">Agregue su servicio</h1>
        <p>Datos generales</p>

        <pv-scrollpanel class="custombar1" style="width: 100%; height: 90%">
          <!-- Input para el título del servicio -->
          <div class="p-float-label margin">
            <pv-inputText id="nameService" v-model="title" class="input-textarea"/>
            <label for="nameService">Titulo del servicio</label>
          </div>

          <!-- Textarea para la descripción del servicio -->
          <div class="card flex p-float-label">
            <pv-textarea v-model="description" autoResize class="input-textarea" cols="30" rows="3"/>
            <label for="descriptionService">Agregue una descripción</label>
          </div>
          <div class="p-float-label margin">
            <pv-inputNumber v-model="precio" :maxFractionDigits="5" :minFractionDigits="2" class="input-textarea"
                            inputId="decPersona"/>
            <label> Precio por persona </label>
          </div>

          <!-- File Upload para imágenes -->
          <div class="card">
            <pv-toast/>
            <pv-fileupload :maxFileSize="1000000" :multiple="true" accept="image/*" name="demo[]"
                           url="./upload.php" @upload="onAdvancedUpload($event)">
              <template #empty>
                <p>Cargue aquí imágenes de su servicio.</p>
              </template>
            </pv-fileupload>
          </div>

          <div class="card flex">
            <div class="impPor margin">
              <p>¿Descuento general?</p>
              <div class="card flex-wrap gap-3 p-fluid">
                <div class="p-float-label">
                  <pv-inputNumber v-model="discountValue" :max="99" :maxFractionDigits="5" :min="0.1"
                                  :minFractionDigits="2"
                                  class="input-textarea" inputId="decPersona"/>
                  <label>Ingrese el descuento</label>
                </div>
              </div>
              <p>%</p>
            </div>
          </div>

          <div class="card flex flex-column">
            <div class="impPor margin">
              <p>¿Descuento por cantidad de personas?</p>
            </div>
            <div class="impPor margin jus-center">
              <div class="p-float-label">
                <pv-inputNumber v-model="number" :useGrouping="false" class="input-textarea" inputId="cantPerson"/>
                <label class="font-bold block mb-2" for="cantPerson">Cantidad de personas</label>
              </div>
              <div class="p-float-label">
                <pv-inputNumber v-model="discountPer" :max="99" :maxFractionDigits="5" :min="0.1" :minFractionDigits="2"
                                class="input-textarea" inputId="decCantPersona"/>
                <label class="font-bold block mb-2" for="locale-german">Descuento</label>
              </div>
            </div>
          </div>


          <!-- Botón para mostrar el diálogo de éxito -->
          <div class="card just-final margin-lados">
            <pv-button icon="pi pi-external-link" label="Agregar servicio" @click="visibleAddService = true"/>
            <pv-dialog v-model:visible="visibleAddService" :style="{ width: '50vw' }" modal>
              <div class="text-center">
                <i class="pi pi-check-circle" style="font-size: 2rem; color: green"></i>
                <p>Su servicio ha sido agregado con éxito</p>
              </div>
            </pv-dialog>
          </div>
        </pv-scrollpanel>
      </div>
    </div>
  </div>
</template>

<style>
input, textarea, select, button {
  /* Otros estilos aquí */
  border: 1px solid gray !important; /* Un estilo de borde diferente */
}

.input-textarea {
  width: 100%;
}

.box-decorator {
  height: 100% !important;
}

.descripcionAdicional {
  margin-top: 10%;
}

.font-size {
  font-size: 12px;
}

.curvo {
  font-style: italic;
}

.negrita {
  font-weight: bold;
}

.img-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  overflow: hidden;
  border-radius: 50%;

}

.margin {
  margin: 2.5% 0 2.5% 0;
}

.impPor {
  display: flex;
  align-items: center;
  gap: 1%;
}

.text-center {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2% 0 3% 0;
}

.sub {
  font-weight: bold;
  font-size: 24px;
}

.box-decorator {
  background-color: #FFFF;
  border-radius: 10px;
}

.desc {
  width: 20%;
  margin-right: 1vw;
}

.form {
  width: 100%;
}

.p-selectbutton .p-button.p-highlight:hover {
  background: hsla(204, 74%, 31%, 0.5);
  border-color: hsla(204, 74%, 31%, 0.5);
  color: #ffffff;
}

.p-selectbutton .p-button {
  background: hsla(204, 74%, 31%, 0.5);

}

@media screen and (max-width: 1156px) {
  .desc.box-decorator {
    display: none;
  }

}

</style>
<style scoped>

</style>
