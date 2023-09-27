import {createRouter, createWebHistory} from "vue-router";
import DestinationsComponent from "@/components/destinations-component.vue";
import LoginComponent from "@/components/login-component.vue";
import ContactUsComponent from "@/components/contact-us-component.vue";
import LandingView from "@/views/landing.view.vue";
import NotFoundView from "@/views/not-found.view.vue";
import ServiceInfoView from "@/views/service-info.view.vue";
import FavoriteServiceView from "@/views/favorite-service.view.vue";



const routes = [
    { path: "/", component: LandingView },  
    { path: "/destinations", component: DestinationsComponent },
    {path: "/login", component: LoginComponent},
    {path: "/contact-us", component: ContactUsComponent},
    {path: "/:pathMatch(.*)*", component: NotFoundView},
    { path: "/service-info", component: ServiceInfoView },
    { path: "/favorite-service", component: FavoriteServiceView },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;