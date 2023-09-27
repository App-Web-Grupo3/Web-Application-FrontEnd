//theme
//import './assets/reset.css'
import "primevue/resources/themes/viva-light/theme.css";
import 'primevue/resources/primevue.min.css';
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import PrimeVue from "primevue/config";
import i18n from "@/locales/i18n";
import ToastService from 'primevue/toastservice';

import Menubar from 'primevue/menubar';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Toolbar from "primevue/toolbar";
import SplitButton from 'primevue/splitbutton';
import Chip from 'primevue/chip';
import Toast from "primevue/toast";
import SpeedDial from "primevue/speeddial";
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
import Card from "primevue/card";
import Galleria from "primevue/galleria";
import inputNumber from "primevue/inputnumber";

import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import ScrollPanel from 'primevue/scrollpanel';
import SelectButton from 'primevue/selectbutton';
import InputNumber from 'primevue/inputnumber';
import Image from 'primevue/image';




const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('pv-menubar', Menubar);
app.component('pv-button', Button);
app.component('pv-dialog', Dialog);
app.component('pv-inputText', InputText);
app.component('pv-toolbar', Toolbar);
app.component('pv-splitButton', SplitButton);
app.component('pv-chip', Chip);
app.component('pv-toast', Toast);
app.component('pv-speedDial', SpeedDial);
app.component('pv-menu', Menu);
app.component('pv-avatar', Avatar);
app.component('pv-card', Card);
app.component('pv-textarea', Textarea);
app.component('pv-fileupload', FileUpload);
app.component('pv-scrollpanel', ScrollPanel);
//app.component('pv-inputnumber', InputNumber);
app.component('pv-selectbutton', SelectButton);
app.component('pv-galleria', Galleria);
app.component('pv-inputNumber', inputNumber);
app.component('pv-image', Image);
app.mount('#app');