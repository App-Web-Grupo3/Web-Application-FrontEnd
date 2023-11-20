import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5103/api/User",
});

export class UserApiService {

    register(body) {
        return http.post("/Register", body)
            .then(response => {
                console.log("Registro exitoso:");
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error en el registro:", error);
            });
    }

    login(body) {
        return http.post("/Login", body)
            .then(response => {
                console.log("Inicio de sesión exitoso:");
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error en el inicio de sesión:", error);
            });
    }

}
