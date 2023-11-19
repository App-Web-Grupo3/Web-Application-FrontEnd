<script>
import NavbarEnterpriseComponent from "@/components/navbar-enterprise.component.vue";
import {CompanyApi} from "@/services/company.service";
import { useToast } from "primevue/usetoast";

export default {
    name: "HomeEmpreComponent",
    components: {
        NavbarEnterpriseComponent,
    },

    data() {
        return {
            user: {},
            company: {
                Name: "",
                Mail: "",
                Description: "",
                Ruc: "",
                Phone: "",
                Address: "",
                ProfilePicture: "https://acortar.link/1W8Buf",
                RepresentanteId: 1,
            },
            dialog_edit: false,
        };
    },
    methods: {
        submitForm() {
            console.log("Entró");
            const servicio = new CompanyApi();
            console.log(this.company)
            servicio
                .post_company(this.company)
                .then((response) => {
                    console.log("Inserción exitosa", response);
                    this.resetForm();
                    this.dialog_edit = false;
                })
                .catch((error) => {
                    console.error("Error al insertar la compañía", error);
                });
        },
        onUpload(files) {
            console.log("Entró al upload", files);
            const file = files[0];
            file.toBase64().then((base64Data) => {
                this.company.ProfilePicture = base64Data;

                console.log("Esta es la imagen ",this.company.ProfilePicture)
            });
        },
        resetForm() {
            this.company = {
                Name: "",
                Mail: "",
                Description: "",
                Ruc: "",
                Phone: "",
                Address: "",
                ProfilePicture: "",
                RepresentanteId: 1,
            };
        },
    },
    setup() {
        const toast = useToast();
        return { toast };
    },
};
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
                    <img alt="logo" v-bind:src="company.profilePicture" style="width: 60%">
                </div>
              <div class="contenido-empresa font-size">
                <p class="sub">{{ company.Name }}</p>
                <p class="negrita">{{ company.Mail }}</p>
                <p class="curvo">{{company.Description}}</p>
                <p>{{company.ProfilePicture}}</p>
                <p class="negrita">Ubicación</p>
                <p> {{company.Address}}</p>
                <p class="negrita">Ruc</p>
                <p>{{ company.Ruc }}</p>
                <p class="negrita">Teléfono</p>
                <p>{{company.Phone}} </p>

                <div class="card flex justify-content-center">
                  <pv-button icon="pi pi-external-link" label="Registrar" plain rounded @click="dialog_edit = true"/>
                  <pv-dialog v-model:visible="dialog_edit" :style="{ width: '50vw' }" header="Header" modal>
                    <form @submit.prevent="submitForm">
                      <div class="form-group">
                        <label for="nombreEmpresa">Nombre de la Empresa</label>
                        <pv-inputText id="name" v-model.trim="company.Name" required type="text"></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="correo">Correo</label>
                        <pv-inputText id="mail" v-model="company.Mail" required type="email"></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="descripcion">Descripción</label>
                        <pv-textarea id="description" v-model="company.Description" required></pv-textarea>
                      </div>
                      <div class="form-group">
                        <label for="ubicacion">Ubicación</label>
                        <pv-inputText id="address" v-model="company.Address" required></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="ruc">RUC</label>
                        <pv-inputText id="ruc" v-model="company.Ruc" required></pv-inputText>
                      </div>
                      <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <pv-inputText id="phone" v-model="company.Phone" required type="tel"></pv-inputText>
                      </div>
                      <div class="form-group">
                        <pv-toast />
                        <label for="imagen">Imagen</label>
                          <pv-fileupload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
                      </div>
                    </form>
                    <template #footer>
                      <pv-button autofocus icon="pi pi-check" label="Registrar" type="submit"
                                 @click="submitForm"/>
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
                  <router-link to="/home/company/hired-service">
                      <pv-button icon="pi pi-check" label="Ver clientes" style="font-size: 12px; padding: 4px 8px;"/>

                  </router-link>
                <pv-button icon="pi pi-times" label="Eliminar" severity="secondary"
                           style="font-size: 12px; padding: 4px 8px; margin-left: 0.5em;"/>
              </template>
            </pv-card>
          </div>
        </pv-scrollpanel>
        <div class="btn">

          <router-link to="/en-home/add-service">

            <pv-button label="Añadir ahora" plain rounded/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-logo{
  width: 50%;
}
.contenido-empresa{
  width: 50%;
}

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
