import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_CONNECTION,
  salt_round: process.env.SALT_ROUND,
  jwt_access_secret: process.env.JWT_SECRET,
};

// export default {
//   node_env: "development",
//   port: 3000,
//   db_url:
//     "mongodb+srv://assignment3:assignment3@bike-rental-service.28omdzn.mongodb.net/",
//   salt_round: 12,
//   jwt_access_secret: "secret",
// };
