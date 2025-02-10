import express from "express";
import cors from "cors";

const app = express();


app.use(express.static("public"));

// routes import:
import userRouter from "./routes/user.routes.js";

// routes explanation:
app.use("/api/v1/user", userRouter); // route works -> // http://localhost:8080/api/v1/users/register:

export { app };