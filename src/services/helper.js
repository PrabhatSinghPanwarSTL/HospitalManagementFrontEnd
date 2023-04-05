import axios from "axios";
// import { getToken } from "../auth/indexD";



//for Doctor
export const D_BASE_URL = 'http://localhost:9091' ;

export const myAxios = axios.create({
    baseURL:D_BASE_URL
}) ;



//for Patient
export const P_BASE_URL = 'http://localhost:9090' ;

export const myAxiosP = axios.create({
    baseURL:P_BASE_URL
}) ;


//for appointment
export const A_BASE_URL = 'http://localhost:2023' ;

export const myAxiosA = axios.create({
    baseURL:A_BASE_URL
}) ;


// export const privateAxios=axios.create({
//     baseURL:A_BASE_URL
// })
// privateAxios.interceptors.request.use(config=>{

//     const token = getToken()
//     console.log(token)

//     if(token) {
//         config.headers.common.Authorization=`Bearer ${token}`
//         return config
//     }

// }, error=>Promise.reject(error))