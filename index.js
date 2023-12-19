import express from "express";
import { sendEmail } from "./sendEmail.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Is the Back-End");
});

app.post("/", async (req, res) => {
  try {
    res.send(await sendEmail(req.body));
  } catch (error) {
    res.statusCode = 400;
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log("Listen in port : 3000");
});
