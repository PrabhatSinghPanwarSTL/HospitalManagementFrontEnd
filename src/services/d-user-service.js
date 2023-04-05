import { myAxios } from "./helper";

export const signUpD = (user) => {

    return myAxios
                .post('/api/v1/auth/register', user)
                .then((response) => response.data)

}


export const loginD = (loginDetail) =>{
    return myAxios.post('/api/v1/auth/login', loginDetail).then((response)=>response.data)
}


//to get all the doctors
export const loadAllDocs = () => {
    return myAxios.get('/api/doctors/').then((response) => response.data)
}