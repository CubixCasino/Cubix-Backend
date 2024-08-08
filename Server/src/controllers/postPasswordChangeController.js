import axios from 'axios'
import { encryptedPassword } from '../config/middleware/encrypted.pasword.js'
import { envs } from '../config/enviroments/enviroments.js'
import User from "../models/userModel.js"

const changePasswordController = async(payload) =>{
    const response = await axios.post(`${envs.HABANERO_API_URL}/UpdatePlayerPassword`, payload, {headers : {'Content-type' : 'application/json'}})

    try {
        if(response.data.Success){
            const user = await User.findOne({
                where: { username: payload.Username },
              })
          
            if (!user) {
                throw new Error('Username does not exist') }
          
            const hashedPassword = await encryptedPassword(payload.NewPassword)
          
            await user.update({ password: hashedPassword })
        }
    } catch (error) {
        throw error
    }

    return response
}

export default changePasswordController