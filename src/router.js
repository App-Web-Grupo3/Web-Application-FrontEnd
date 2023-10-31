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
    {path: "/home", component: ServiceOfferView},
    {path: "/home/activities/:activityId", component: ServiceInfoView},
    {path: "/home/favorite-activities", component: FavoriteServiceView},
    {path: "/home/hired-service", component: HiredServicesTourist},
    {path: "/en-home", component: HomeEnterpriseView},
    {path: "/en-home/add-service", component: AddServiceView },
    {path: "/en-home/hired-service", component: HiredServicesCompany},
    {path: "/:pathMatch(.*)*", component: NotFoundView},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;