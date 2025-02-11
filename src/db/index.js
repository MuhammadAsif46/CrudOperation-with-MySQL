import { DB_NAME } from "../constant.js";
import mysql from "mysql2/promise";

// 1. to connect of mysql server
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "mysql_db",
});
console.log("MySQL Connected Successfully");

// 2. we need to create a database
// await db.execute("create database mysql_db")
console.log(await db.execute("show databases"));

// 3. then we create a table

// await db.execute(`
//     CREATE TABLE users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     );
//     `);
// console.log("hello ");

//  4. and is to perform CRUD Operation

// using Inline Values (Not Recommended):
// await db.execute(`
//     INSERT INTO users(username, email) VALUES('John','jhon@email.com')
//     `);
// console.log("hello");

// using prepared statement (Best practice):
// await db.execute(
//   `
//     INSERT INTO users(username, email) VALUES(?,?)
//     `,
//   ["Jhole", "jhole@email.com"]
// );

// insertMany code
// const values = [
//     ["Alice", "alice@email.com"],
//     ["David", "david@email.com"],
// ]
// await db.query(
//   `
//     INSERT INTO users(username, email) VALUES ?
//     `,
//   [values]
// );

// const [rows] = await db.execute(`select * from users;`);
// specific user data:
const [rows] = await db.execute(`select * from users where username="David";`);
console.log(rows);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MySQL connected !! BD HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MySQL Connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
