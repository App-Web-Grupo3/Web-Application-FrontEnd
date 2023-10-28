import axios from "axios";
import { server } from "@/server";

const http = axios.create({
    baseURL: server.API_PATH,
});

export class EnterprisesService {
    constructor() {}

    async getEnterpriseById(id) {
        try {
            return await http.get(`/enterprises/${id}`);
        } catch (error) {
            console.error('Error al obtener empresa:', error);
            throw error;
        }
    }
}
