<script>
import NavbarEnterpriseComponent from "@/components/navbar-enterprise.component.vue";

export default {
  name: "HomeEmpreComponent",
  components: {
    NavbarEnterpriseComponent,
  }
  ,
  data() {
    return {
      user: {

      },
      empresa: {
        nombre: '',
        correo: '',
        descripcion: '',
        ubicacion: '',
        ruc: '',
        telefono: '',
        imagen: null
      },
      dialog_edit: false
    };


  },
  methods: {
    submitForm() {
      console.log(this.empresa);
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.empresa.imagen = file;
    }
  },
  beforeMount() {
    //this.user = localStorage.getItem(JSON.parse'user');
    let o = localStorage.getItem('user');
    this.user = JSON.parse(o);
  }
}
</script>
<template>
  <div class="div-prin view">
    <navbar-enterprise-component></navbar-enterprise-component>
    <div class="div-main container flex gap-5">
      <div class="div-col1 flex flex-column gap-5">
        <div class="div-description layout">
          <h1 class="title"> ¡Bienvenido!</h1>
          <pv-scrollpanel class="custombar1" style="width: 100%; height: 80%;">
            <div class="flex" style=" margin-bottom: 20px;">
              <div class="img-logo">
                <img alt="logo" src="https://acortar.link/vFAsSK" style="width: 60%">
              </div>
              <div class="contenido-empresa font-size">
                <p class="sub">TravelNew</p>
                <p class="negrita">travelnew@gmailcom</p>
                <p class="curvo">{{user}}</p>

                <p class="negrita">Ubicación</p>
                <p> Maecenas ultricies, InNulla.</p>
                <p class="negrita">Ruc</p>
                <p>641478521</p>
                <p class="negrita">Teléfono</p>
                <p>+51 952364789 </p>

                <div class="card flex justify-content-center">
                  <pv-button icon="pi pi-external-link" label="Editar" plain rounded @click="dialog_edit = true"/>
                  <pv-dialog v-model:visible="dialog_edit" :style="{ width: '50vw' }" header="Header" modal>
                    <form @submit.prevent="submitForm">
                      <div class="form-group">
                        <label for="nombreEmpresa">Nombre de la Empresa</label>
                        <pv-inputText id="nombreEmpresa" v-model="empresa.nombre" required type="text"></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="correo">Correo</label>
                        <pv-inputText id="correo" v-model="empresa.correo" required type="email"></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="descripcion">Descripción</label>
                        <pv-textarea id="descripcion" v-model="empresa.descripcion" required></pv-textarea>
                      </div>
                      <div class="form-group">
                        <label for="ubicacion">Ubicación</label>
                        <pv-inputText id="ubicacion" v-model="empresa.ubicacion" required></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="ruc">RUC</label>
                        <pv-inputText id="ruc" v-model="empresa.ruc" required></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <pv-inputText id="telefono" v-model="empresa.telefono" required type="tel"></pv-inputText>
                      </div>
                      <div class="form-group">
                        <pv-toast/>
                        <label for="imagen">Imagen</label>
                        <pv-fileupload id="imagen" accept="image/*" type="file"
                                       @change="handleImageUpload"></pv-fileupload>
                      </div>
                    </form>
                    <template #footer>
                      <pv-button autofocus icon="pi pi-check" label="Actualizar" type="submit"
                                 @click="dialog_edit = false"/>
                    </template>
                  </pv-dialog>
                </div>
              </div>
            </div>
          </pv-scrollpanel>
        </div>
        <div class="div-coment layout">
          <h1 class="title"> Preguntas y respuestas</h1>
          <pv-scrollpanel class="custombar1" style="width: 100%; height: 80%">
            <div class="coment">

              <div class="avatar">
                <pv-avatar class="mr-2" image="https://acortar.link/7nn7tn" shape="circle" size="xlarge"/>

              </div>
              <div class="com-desc">
                <p class="nameComent">Marcos Alvarez Campos</p>
                <p>Excelente, altamente recomendado, siempre hay buena energía y predisposición para compartir las
                  experiencias y transmitir lo mejor del lugar.</p>

              </div>
              <div class="iconS">
                <i class="pi pi-send center"></i>
                <i class="pi pi-delete-left center"></i>
              </div>

            </div>
          </pv-scrollpanel>
        </div>
      </div>
      <div class="div-col2 layout">
        <h1 class="title"> Mis servicios</h1>

        <pv-scrollpanel class="custombar1" style="width: 100%; height: 80%">

          <div class="card flex align-items-center justify-content-center">
            <pv-card style="width: 90%">
              <template #header>
                <img alt="user header" src="https://acortar.link/jXD7uj"
                     style="float: left; margin-right: 10px; max-width: 30%;"/>
              </template>
              <template #title style="clear: none; width: auto;"> Paquete premium</template>
              <template #subtitle style="clear: none; width: auto;"> Card subtitle</template>
              <template #content>
                <p style="font-size: 13px;">Expedición para alpinistas en El Huascarán. Oferta limitada por
                  temporada.</p>
              </template>
              <template #footer>
                <pv-button icon="pi pi-check" label="Ver clientes" style="font-size: 12px; padding: 4px 8px;"/>
                <pv-button icon="pi pi-times" label="Eliminar" severity="secondary"
                           style="font-size: 12px; padding: 4px 8px; margin-left: 0.5em;"/>
              </template>
            </pv-card>
          </div>
        </pv-scrollpanel>
        <div class="btn">
          <router-link to="/add-services">
            <pv-button label="Añadir ahora" plain rounded/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.font-size {
  font-size: 12px;
}

.flex {
  display: flex;
}

.avatar {
  width: 15%;
}

.com-desc {
  width: 70%;
}

.coment {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5%;
  margin: 1%;
  align-items: center;
}

.nameComent {
  font-weight: bold;
  font-size: 15px;
}

.com-desc p {
  font-size: 12px;
}

.iconS {
  width: 15%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 1%;
  align-items: center;
}

.iconS i {
  font-size: 20px;
}

.coment {
  display: flex;
  gap: 1%;
}

.btn {
  display: flex;
  margin-top: 5vh;
  justify-content: center;
}

.div-col1 {
  width: 50%;
}

.div-description {
  height: 35%;
  background-color: #FFFFFF;
  border-radius: 10px;
}

.div-coment {
  height: 65%;
  border-radius: 10px;
  background-color: #FFFFFF;
}

.div-col2 {
  width: 50%;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  height: 80vh;
  background-color: #FFFFFF;
}

.sub {
  font-weight: bold;
  font-size: 24px;
}

.pi {
  margin-top: 10vh;
  font-size: 55px;
}

@media (max-width: 1240px) {

  .div-main {
    flex-direction: column;
    /* Cambio a columna en pantallas más pequeñas */
    align-items: center;
    /* Centro los elementos en el eje X */

  }

  .div-col1,
  .div-col2 {
    width: 100%;
    /* Ancho completo para ambas columnas */
    margin: 0;
    /* Elimino los márgenes */
    gap: 10px;
  }

  .div-description .div-coment {

    margin-bottom: 60px;
    /* Espaciado entre columnas */
    gap: 60px;
  }

  .div-col2 {
    margin-top: 20px;
    /* Espaciado entre columnas */
  }
}</style>
