import mysql from "mysql2/promise";
import "dotenv/config";

// 1. to connect of mysql server
const mySqlDB = mysql.createPool({
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
});
// console.log("MySQL Connected Successfully");

export const connectDB = async () => {
  mySqlDB
    .query("SELECT 1")
    .then(() => {
      console.log("my-sql database connected");
    })
    .catch((err) => {
      console.error(err);
      console.log("MySQL Connection failed:", err);
    });
};

export default mySqlDB;
