import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import bookRouter from "./routes/bookRoute.js";
import cors from "cors";
const app = express();
app.use(cors());
/*app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);*/
app.use(express.json()); //parsing middleware
app.use("/books", bookRouter); //this is a redirecting middleware
mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("[LISTENING]");
    });
  })
  .catch((err) => {
    console.log("[DB CONN]", err);
  });

/*app.listen(PORT, () => {
  console.log("[WORKING]");
});
*/
