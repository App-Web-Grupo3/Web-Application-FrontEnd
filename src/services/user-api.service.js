import axios from "axios";
const http = axios.create({
    baseURL: "http://localhost:3000/660/",
    headers: {
        "Authorization":"Bearer" + sessionStorage.getItem("accessToken"),
    },
});
export class UserApiService {

    register(body) {
        return http.post("http://localhost:3000/register/", body);
    }
    login(body){
        return http.post("http://localhost:3000/login/", body)
    }

}
