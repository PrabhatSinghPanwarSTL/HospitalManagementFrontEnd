import { myAxiosA } from "./helper";


//create appointment fuction
export const createPost = (postData) => {
    return myAxiosA.post('/api/apointments/', postData).then(response=>response.data)
}


//getting all appointments of the patient

export const getAllApo = (userId) => {
    return myAxiosA.get(`api/apointments/patientApointment/${userId}`).then(response => response.data)
}

//getting all appointments of doctor
export const getAllApoDoc = (docId) => {
    return myAxiosA.get(`api/apointments/doctorApointment/${docId}`).then(response => response.data)
}

//getting single appointment by aid 
export const getSingleApo = (aid) => {
    return myAxiosA.get(`/api/apointments/${aid}`).then(response=>response.data)
}

//deleting the appointment of user
export const deleteApo = (apoId) => {
    return myAxiosA.delete(`api/apointments/${apoId}`).then(response => response.data)
}


// updating apointment by aid
export const UpdateApoint = (apo, apoId) => {
    return myAxiosA.put(`/api/apointments/${apoId}`, apo).then(response => response.data)
}