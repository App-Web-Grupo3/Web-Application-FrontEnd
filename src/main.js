import './assets/reset.css'
import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import PrimeVue from "primevue/config";
import i18n from "@/locales/i18n";

import Menubar from 'primevue/menubar';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';


import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);


app.component('pv-navbar', Menubar);
app.component('pv-button', Button);
app.component('pv-dialog', Dialog);
app.mount('#app');