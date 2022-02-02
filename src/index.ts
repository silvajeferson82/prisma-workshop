import express from "express";
import { routes } from "./routes";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(routes)
app.use(cors)

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);