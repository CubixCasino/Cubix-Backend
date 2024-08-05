import axios from 'axios'
import { encryptedPassword } from '../config/middleware/encrypted.pasword.js'
import { envs } from '../config/enviroments/enviroments.js'

const recoveryPasswordController = async(payload) =>{
    const response = await axios.post(`${envs.HABANERO_API_URL}/UpdatePlayerPassword`, payload, {headers : {'Content-type' : 'application/json'}})
    console.log("payload controller: ", payload);
    console.log(response.data);
    try {
        if(response.data.success){
            const hashedPassword = await encryptedPassword(newPassword)
            await User.update(
            { password: hashedPassword },
            { where: { username: payload.Username } }
            )
        }
      
    } catch (error) {
        throw new Error('Failed update password in DataBase')
    }

    return response
}

export default recoveryPasswordController