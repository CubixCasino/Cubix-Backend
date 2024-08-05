import axios from "axios"

const URL = "http://localhost:3001/users/register"

// const POST_USER = "POST_USER"

export const createUser  = (form) =>{
    return async () =>{
        try {
            const response = await axios.post(URL, form)
            console.log(response.status)
        } catch (error) {
            console.error(error)
            
        }
    }
}


export const twilioConfirm = (number) =>{
    const URL_TWILIO =  `http://localhost:3001/verifyuser/sendOTP/${number}`
    return async () =>{
        try {
            const response = await axios.post(URL_TWILIO)
            console.log(response.status)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
}