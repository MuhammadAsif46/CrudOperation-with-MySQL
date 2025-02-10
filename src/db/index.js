import { DB_NAME } from "../constant.js";
import mysql from "mysql2/promise" 

// 1. to connect of mysql server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    // database: "",
})
console.log("MySQL Connected Successfully");

// 2. we need to create a database

// await db.execute("create database mysql_db")
console.log(await db.execute("show databases"));

// 3. then we create a table
//  4. and is to perform CRUD Operation

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`\n MySQL connected !! BD HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("MySQL Connection failed:", error);
        process.exit(1);
    }
}

export default connectDB;