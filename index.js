import express from "express";
import { sendEmail } from "./sendEmail.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Is the Back-End");
});

app.post("/", (req, res) => {
  sendEmail(req.body);
  res.send("Email Send Sucessfully");
});

app.listen(3000, () => {
  console.log("Listen in port : 3000");
});
