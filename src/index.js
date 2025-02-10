import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    const port = process.env.PORT || 5001;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MySQL Connection failed:", err);
  });
