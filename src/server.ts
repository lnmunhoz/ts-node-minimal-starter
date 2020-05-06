import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { isProduction, PORT } from "./constants";

const app = express();

app.use(bodyParser.json());

if (!isProduction) {
  app.use(morgan("dev"));
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
