import axios from "axios";

export const appClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

appClient.interceptors.request.use(
    (request) => {
        if(request.headers){
            console.log(sessionStorage.getItem('token'))
            request.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        }

        return request;
    }
);