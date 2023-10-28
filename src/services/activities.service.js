import axios from "axios";
import {server} from "@/server";

const http = axios.create({
    baseURL: server.API_PATH,
});
export class ActivitiesService {
    constructor() {}

    async getActivityById(id) {
        try {
            return await http.get(`/activities/${id}`);
        } catch (error) {
            console.error('Error al obtener actividad:', error);
            throw error;
        }
    }
}
//<router-link :to="'/service-info/' + activity.id">Ver detalles</router-link>