import { myAxiosP } from "./helper";

export const signUpP = (user) => {

    return myAxiosP
                .post('/api/v2/auth/registerpatient', user)
                .then((response) => response.data)

}


export const loginP = (loginDetail) =>{
    return myAxiosP.post('/api/v2/auth/login', loginDetail).then((response)=>response.data)
}

