import express from "express";
import {connectDB} from "./src/db/index.js";
import userRoutes from "./src/routes/user.routes.js";
import morgan from "morgan";

const app = express();

// middleware:
app.use(morgan('dev'));
app.use(express.json());

connectDB()

// routes explanation:
app.use("/api/v1", userRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});