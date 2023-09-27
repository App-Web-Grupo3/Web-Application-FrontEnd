import {createRouter, createWebHistory} from "vue-router";
import DestinationsComponent from "@/components/destinations-component.vue";
import LoginComponent from "@/components/login-component.vue";
import ContactUsComponent from "@/components/contact-us-component.vue";
import LandingView from "@/views/landing.view.vue";
import NotFoundView from "@/views/not-found.view.vue";
import ServiceInfoView from "@/views/service-info.view.vue";
import HomeEmpreComponent from "./components/Empresa/homeEmpre-component.vue"
import AddServiceComponent from "./components/Empresa/addService-component.vue"


const routes = [
    { path: "/", component: LandingView },  
    { path: "/destinations", component: DestinationsComponent },
    { path: "/homeEmpresa", component: HomeEmpreComponent },
    {path: "/agregarServicio", component: AddServiceComponent},
    {path: "/login", component: LoginComponent},
    {path: "/contact-us", component: ContactUsComponent},
    {path: "/:pathMatch(.*)*", component: NotFoundView},
    { path: "/service-info", component: ServiceInfoView },
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;