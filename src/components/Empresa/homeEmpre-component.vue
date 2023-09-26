
<template>

  
    <header>
          <navbarEmpresaComponent />
    </header>
      
   
       <div class="div-prin">
           <div class="div-main">
               <div class="div-col1">
                   <div class="div-description">
                       <p class="sub"> ¡Bienvenido!</p>
                       <pv-scrollpanel style="width: 100%; height: 80%;" class="custombar1">
                           <div class="flex" style=" margin-bottom: 20px;">
                           <div class="img-logo">
                               <img src="https://acortar.link/vFAsSK" alt="logo" style="width: 60%" >
                           </div>
                           <div class="contenido-empresa">
                               <p class="sub">TravelNew</p>
                               <p class="negrita">travelnew@gmailcom</p>
                               <p class="curvo">Somos una empresa de transporte publico que realiza viajes dentro del país sin descuidar la seguridad y comodidad al cliente.</p>


                               <p class="negrita">Ubicación</p>
                               <p> Maecenas ultricies, InNulla.</p>
                               <p class="negrita">Ruc</p>
                               <p>641478521</p>
                               <p class="negrita">Teléfono</p>
                               <p>+51 952364789 </p>


                               <div class="card flex justify-content-center">
                                   <pv-button label="Editar" icon="pi pi-external-link" @click="dialog_edit = true" plain rounded />
                                   <pv-dialog v-model:visible="dialog_edit" modal header="Header" :style="{ width: '50vw' }">
                                       <form @submit.prevent="submitForm">
                                           <div class="form-group">
                                               <label for="nombreEmpresa">Nombre de la Empresa</label>
                                               <pv-inputText type="text" id="nombreEmpresa" v-model="empresa.nombre" required></pv-inputText>
                                           </div>

                                           <div class="form-group">
                                               <label for="correo">Correo</label>
                                               <pv-inputText type="email" id="correo" v-model="empresa.correo" required></pv-inputText>
                                           </div>

                                           <div class="form-group">
                                               <label for="descripcion">Descripción</label>
                                               <pv-textarea id="descripcion" v-model="empresa.descripcion" required></pv-textarea>
                                           </div>

                                           <div class="form-group">
                                               <label for="ubicacion">Ubicación</label>
                                               <pv-inputText  id="ubicacion" v-model="empresa.ubicacion" required></pv-inputText>
                                           </div>

                                           <div class="form-group">
                                               <label for="ruc">RUC</label>
                                               <pv-inputText id="ruc" v-model="empresa.ruc" required></pv-inputText>
                                           </div>

                                           <div class="form-group">
                                               <label for="telefono">Teléfono</label>
                                               <pv-inputText type="tel" id="telefono" v-model="empresa.telefono" required></pv-inputText>
                                           </div>

                                           <div class="form-group">
                                               <pv-toast />
                                               <label for="imagen">Imagen</label>
                                               <pv-fileupload type="file" id="imagen" @change="handleImageUpload" accept="image/*"></pv-fileupload>
                                           </div>


                                       </form>
                                       <template #footer>
                                           <pv-button type="submit" label="Actualizar" icon="pi pi-check" @click="dialog_edit = false" autofocus />
                                       </template>
                                   </pv-dialog>
                               </div>


                           </div>

                       </div>
                       </pv-scrollpanel>






                   </div>
                   <div class="div-coment">
                       <p class="sub"> Preguntas y respuestas</p>
                       <pv-scrollpanel style="width: 100%; height: 80%" class="custombar1">
                           <div class="coment">

                               <div class="avatar">
                                   <pv-avatar image="https://acortar.link/7nn7tn" class="mr-2" size="xlarge" shape="circle" />

                               </div>
                               <div class="com-desc">
                                   <p class="nameComent">Marcos Alvarez Campos</p>
                                   <p>Excelente, altamente recomendado, siempre hay buena energía y predisposición para compartir las experiencias y transmitir lo mejor del lugar.</p>

                               </div>
                               <div class="iconS" >
                                   <i class="pi pi-send center"></i>
                                   <i class="pi pi-delete-left center" ></i>
                               </div>

                           </div>
                       </pv-scrollpanel>


                   </div>

               </div>
               <div class="div-col2">

                   <p class="sub"> Mis servicios</p>
                   <pv-scrollpanel style="width: 100%; height: 80%" class="custombar1">
                       <i class="pi pi-arrow-circle-up centrar" style="color: #C4C4C4"></i>
                       <p class="opc">
                           Aun no haz registrado ningun servicio en nuestra plataforma
                       </p>
                       <div class="btn">

                           <router-link to="/agregarServicio">
                               <pv-button label="Añadir ahora" plain rounded/>
                           </router-link>

                       </div>
                   </pv-scrollpanel>



               </div>
           </div>
       </div>

    
            
        

      
  
</template>

<script>
import navbarEmpresaComponent from './navbarEmpresa-component.vue';

export default {
    name: "HomeEmpreComponent",
    components: {
        navbarEmpresaComponent, 
    }
    ,
    data() {
        return {
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
            // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones.
            console.log(this.empresa);
        },
        handleImageUpload(event) {
            const file = event.target.files[0];
            this.empresa.imagen = file;
        }
    }
}
</script>


<style scoped>
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

.icon {
    display: flex;
    gap: 89%;
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

.div-prin {

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;
    height: 100vh;
    width: 100vw;
}

.div-main {
    display: flex;
    width: 80%;
    height: 70%;
}

.div-col1 {
    width: 50%;
}

.div-description {
    height: 35%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 1%;
    margin-right: 0.25vw;
    margin-bottom: 0.5vw;
}

.div-coment {
    height: 65%;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 1%;
    margin-right: 0.25vw;

}

.div-col2 {
    width: 50%;
    border-radius: 10px;
    padding: 1%;
    align-items: center;
    height: 100%;
    margin-left: 0.25vw;
    background-color: #FFFFFF;

}

.sub {
    font-weight: bold;
    font-size: 24px;
}

.centrar {
    text-align: center;
    display: flow;
}

.pi {
    margin-top: 10vh;
    font-size: 55px;
}

.opc {
    font-size: 12px;
    text-align: center;
    margin-top: 5vh;
}

@media (min-width: 1800px) {
    .div-main {
        width: 1440px;
        height: 741px;
    }

}

@media (max-width: 1240px) {
    .div-prin {
        height: 100%;


    }

    .div-main {
        margin-top: 10vh;
        flex-direction: column;
        /* Cambio a columna en pantallas más pequeñas */
        align-items: center;
        /* Centro los elementos en el eje X */

        height: 100vh;
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
