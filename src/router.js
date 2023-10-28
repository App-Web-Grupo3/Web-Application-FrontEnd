import {createRouter, createWebHistory} from "vue-router";
import DestinationsComponent from "@/components/destinations.component.vue";
import LoginComponent from "@/components/login.component.vue";
import ContactUsComponent from "@/components/contact-us.component.vue";
import LandingView from "@/views/landing.view.vue";
import NotFoundView from "@/views/not-found.view.vue";
import ServiceInfoView from "@/views/service-info.view.vue";
import ServiceOfferView from "@/views/services-offers.view.vue";
import HomeEnterpriseView from "@/views/home-enterprise.view.vue";
import AddServiceView from "@/views/add-service.view.vue";
import RegisterComponent from "@/components/register.component.vue";
import FavoriteServiceView from "@/views/favorite-service.view.vue";

import ServiceDataComponent2 from "@/components/service-data.component2.vue";

import HiredServicesTourist from "@/views/hired-services-tuorist.vue";
import HiredServicesCompany from "@/views/hired-services-company.vue";


const routes = [
    {path: "/", component: LandingView},
    {path: "/destinations", components: DestinationsComponent},
    {path: "/login", component: LoginComponent},
    {path: "/register", component: RegisterComponent},
    {path: "/contact-us", component: ContactUsComponent},

    {path: "/service-info", component: ServiceInfoView},
    {path: "/favorite-service", component: FavoriteServiceView},
    {path: "/enterprise/home", component: HomeEnterpriseView},
    {path: "/add-service", component: AddServiceView},
    {path: "/services-offers", component: ServiceOfferView},
    {path: "/services-data", component: ServiceDataComponent2},
    {path: "/home", component: ServiceOfferView},
    {path: "/home/service-info", component: ServiceInfoView},
    {path: "/home/favorite-service", component: FavoriteServiceView},
    {path: "/home/company/hired-service", component: HiredServicesCompany},
    {path: "/home/tourist/hired-service", component: HiredServicesTourist},
    {path: "/en-home", component: HomeEnterpriseView},
    {path: "/en-home/add-service", component: AddServiceView},
    {path: "/:pathMatch(.*)*", component: NotFoundView},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;