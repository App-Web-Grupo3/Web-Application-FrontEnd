import { createRouter, createWebHistory } from "vue-router";
import DestinationsComponent from "@/components/destinations-component.vue";
import LoginComponent from "@/components/login-component.vue";
import ContactUsComponent from "@/components/contact-us-component.vue";
import LandingView from "@/views/landing.view.vue";
import NotFoundView from "@/views/not-found.view.vue";
import ServiceInfoView from "@/views/service-info.view.vue";
import FavoriteServiceView from "@/views/favorite-service.view.vue"; // Asegúrate de importar esta vista si aún la necesitas
import HomeEnterpriseView from "@/views/home-enterprise.view.vue";
import AddServiceView from "@/views/add-service.component.vue";

const routes = [
  { path: "/", component: LandingView },
  { path: "/destinations", component: DestinationsComponent },
  { path: "/contact-us", component: ContactUsComponent },
  { path: "/login", component: LoginComponent },
  { path: "/service-info", component: ServiceInfoView },
  { path: "/favorite-service", component: FavoriteServiceView }, // Asegúrate de mantener esta ruta si aún la necesitas
  { path: "/enterprise/home", component: HomeEnterpriseView },
  { path: "/add-services", component: AddServiceView },
  { path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;