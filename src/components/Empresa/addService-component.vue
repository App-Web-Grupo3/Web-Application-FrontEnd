<template>
    <header>
              <navbarEmpresaComponent />
        </header>

        <div class="div-prin">
            <div class="div-main">
                <div class="desc box-decorator">
                    <div class="img-logo">
                        <img src="https://acortar.link/vFAsSK" alt="logo" style="width: 70%" >
                    </div>
                    <div class="contenido-empresa font-size">
                        <p class="sub">TravelNew</p>
                        <p class="negrita">travelnew@gmailcom</p>
                        <p class="curvo">Somos una empresa de transporte publico que realiza viajes dentro del país sin descuidar la seguridad y comodidad al cliente.</p>

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
                <div class="form box-decorator">
                    <p class="sub">Agregue su servicio</p>
                    <p>Datos generales</p>

                    <pv-scrollpanel style="width: 100%; height: 90%" class="custombar1">
                        <!-- Input para el título del servicio -->
                        <div class="p-float-label margin">
                            <pv-inputText id="nameService" v-model="title" />
                            <label for="nameService">Titulo del servicio</label>
                        </div>

                        <!-- Textarea para la descripción del servicio -->
                        <div class="card flex justify-content-center p-float-label">
                            <pv-textarea v-model="description" autoResize rows="3" cols="30" />
                            <label for="descriptionService">Agregue una descripción</label>
                        </div>
                        <div class="p-float-label margin">
                            <pv-inputNumber inputId="decPersona" :minFractionDigits="2" :maxFractionDigits="5" v-model="precio" />
                            <label> Precio por persona </label>
                        </div>

                        <!-- File Upload para imágenes -->
                        <div class="card">
                            <pv-toast />
                            <pv-fileupload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
                                <template #empty>
                                    <p>Cargue aquí imágenes de su servicio.</p>
                                </template>
                            </pv-fileupload>
                        </div>

                        <div class="card flex justify-content-center">
                            <div class="impPor margin">
                                <p>¿Descuento general?</p>
                                <div class="card flex-wrap gap-3 p-fluid">
                                    <div class="p-float-label">
                                        <pv-inputNumber inputId="decPersona" :min="0.1" :max="99" :minFractionDigits="2" :maxFractionDigits="5" v-model="discountValue" />
                                        <label>Ingrese el descuento</label>
                                    </div>
                                </div>
                                <p>%</p>
                            </div>
                        </div>

                        <div class="card flex justify-content-center">
                            <div class="impPor margin">
                                <p>¿Descuento por cantidad de personas?</p>
                            </div>
                            <div class="impPor margin jus-center">
                                <div class="p-float-label">
                                    <pv-inputNumber v-model="number" inputId="cantPerson" :useGrouping="false" />
                                    <label for="cantPerson" class="font-bold block mb-2">Cantidad de personas</label>
                                </div>
                                <div class="p-float-label">
                                    <pv-inputNumber v-model="discountPer" inputId="decCantPersona" :min="0.1" :max="99" :minFractionDigits="2" :maxFractionDigits="5" />
                                    <label for="locale-german" class="font-bold block mb-2">Descuento</label>
                                </div>
                            </div>
                        </div>


                        <!-- Botón para mostrar el diálogo de éxito -->
                        <div class="card just-final margin-lados">
                            <pv-button label="Agregar servicio" icon="pi pi-external-link" @click="visibleAddService = true" />
                            <pv-dialog v-model:visible="visibleAddService" modal :style="{ width: '50vw' }">
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

<script>

import navbarEmpresaComponent from './navbarEmpresa-component.vue';

export default {
    name: "AddServiceComponent",
    components: {
        navbarEmpresaComponent,
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
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
}
</script>

<style>
input, textarea, select, button {
    /* Otros estilos aquí */
    border: 1px solid gray !important; /* Un estilo de borde diferente */
}
.descripcionAdicional{
    margin-top: 10%;
}
.font-size{
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


p-fileupload .p-fileupload-buttonbar {
    justify-content: center;
}

.just-final {
    display: flex;
    justify-content: flex-end;
}

.margin-lados {
    margin: 2.5% 2.5% 2.5% 0;
}

.margin {
    margin: 2.5% 0 2.5% 0;
}

.impPor {
    display: flex;
    align-items: center;
    gap: 1%;
}

.jus-center {
    justify-content: center;
}

.text-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2% 0 3% 0;

}


.p-button-label {
    color: white;
}

.sub {
    font-weight: bold;
    font-size: 24px;
}

.box-decorator {
    background-color: #FFFF;
    padding: 1%;
    border-radius: 10px;
}

.desc {
    width: 20%;
    margin-right: 1vw;
}

.form {
    width: 80%;
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

.subform {
    width:  100%;
}

.p-inputtext {
    width: 100%;
}

.p-fileupload .p-fileupload-buttonbar {

    justify-content: center;
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

    .div-main {

        justify-content: end;
    }
}

@media (min-width: 1800px) {
    .div-main {
        width: 1440px;
        height: 741px;

    }

}</style>
<style scoped>
.p-button {
    color: #ffffff;
    background: hsla(204, 74%, 31%, 0.5);
    border: hsla(204, 74%, 31%, 0.5);
}
</style>
