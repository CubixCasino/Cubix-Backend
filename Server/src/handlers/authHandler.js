import generateJWT from "../config/middleware/jwt.generate.js";
import { validateUser } from "../controllers/authController.js";
import { parseLoginData } from "../validates/userValidates.js";

export const authHandler = async (req, res) => {
  const { data, error } = parseLoginData(req.body);

  if (error) {
    return res.status(422).json({
      status: "Error",
      message: error.map((error) => error.message),
    });
  }
  try {
    const { habaneroData, user } = await validateUser(
      data.username,
      data.password
    );

    const token = await generateJWT(user.id);

    return res.status(200).json({
      status: true,
      message: "User validated successfully",
      token: token,
      tokenHabanero: habaneroData.Token,
      user: {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        picture: user.picture,
      },
      habaneroData,
    });
  } catch (error) {
    console.error("Error validating user:", error.message);
    return res.status(400).json({ message: error.message });
  }
};
