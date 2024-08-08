import { Sequelize } from "sequelize";
import { envs } from "./src/config/enviroments/enviroments.js";


const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      // rejectUnauthorized: false, // Esto puede ser necesario si estás usando certificados autofirmados
    },
  },
});

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
// });

const models = {
  ...sequelize.models,
  conn: sequelize,
};

export { models, sequelize };