import axios from "axios"

const URL = "https://cubix.onrender.com/users/register"

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
    const URL_TWILIO =  `https://cubix.onrender.com/verifyuser/sendOTP/${number}`
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