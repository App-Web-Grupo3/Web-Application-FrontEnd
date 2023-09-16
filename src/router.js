import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "@/components/home-component.vue";
import NotFoundComponent from "@/components/not-found-component.vue";
import DestinationsComponent from "@/components/destinations-component.vue";
import LoginComponent from "@/components/login-component.vue";
import MyProfileComponent from "@/components/my-profile-component.vue";
import ContactUsComponent from "@/components/contact-us-component.vue";

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/home", component: HomeComponent},
    {path: "/destinations", component: DestinationsComponent},
    {path: "/login", component: LoginComponent},
    {path: "/my-profile", component: MyProfileComponent},
    {path: "/contact-us", component: ContactUsComponent},
    {path: "/:pathMatch(.*)*", component: NotFoundComponent}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;