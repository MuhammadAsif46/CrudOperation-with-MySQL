import express from "express";
import {connectDB} from "./src/db/index.js";
import userRoutes from "./src/routes/user.routes.js";

const app = express();


connectDB()

// routes explanation:
app.use("/api/v1", userRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});