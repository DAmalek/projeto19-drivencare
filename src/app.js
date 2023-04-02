import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.unsubscribe(express.json());
app.use(cors());

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server rodando...");
});
