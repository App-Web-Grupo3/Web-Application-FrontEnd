import axios from "axios";
import { server } from "@/server";

const http = axios.create({
    baseURL: server.API_PATH,
});
export class CompanyApi{
     post_company(body){
        console.log("Entro al service",body)
        return  axios.post('http://localhost:5103/api/v1/Company', body)
            .then(response => {
                // Manejar la respuesta exitosa
                console.log("Ingreso al API")
                console.log(response.data);
            })
            .catch(error => {
                // Manejar errores
                console.error("Error en la solicitud:", error);
            });
    }
}