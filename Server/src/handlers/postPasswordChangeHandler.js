import { envs } from '../config/enviroments/enviroments.js';
import changePasswordController from '../controllers/postPasswordChangeController.js'
import { changePasswordSchema } from '../validates/changePasswordValidates.js';


const changePasswordHandler = async(req, res) => {
    try {
        const { Username, NewPassword } = req.body

        const validatedInformation = changePasswordSchema.parse({ Username, NewPassword })

        const payload = {
            BrandId : envs.BRANDID,
            APIKey : envs.APIKEY,
            Username: validatedInformation.Username,
            NewPassword : validatedInformation.NewPassword
        };
        
        const passwordChanged = await changePasswordController(payload)

        if (!passwordChanged.data.Success) {
            throw new Error(passwordChanged.data.Message)
        }

        return res.status(200).json(passwordChanged.data)
    } catch (error) {
        if (error.name === 'ZodError') {
            // Extraer solo los mensajes de los errores de Zod
            const messages = error.errors.map(err => err.message);
            return res.status(500).json({ error: messages.join(', ') });
        }

        return res.status(500).json({ error: error.message })
    }
}

export default changePasswordHandler