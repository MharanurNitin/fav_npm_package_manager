import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import packageNameRoute from "./route/PackageName.js";
import "./db.config.js";
dotenv.config();
const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/", packageNameRoute);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
