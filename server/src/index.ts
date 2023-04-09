import express, { Express } from "express";
import { corsConfig } from "./config/expressConfig";
import { json } from 'body-parser';
import { transformText } from "./middleware/transformText";
import { scoreCard } from "./routes/getTextInfo";
//create express app
const app: Express = express();
app.use(corsConfig);
app.use(json());
app.use(transformText)
app.use(scoreCard);
app.listen(8000, () => {
  console.log("server started at http://localhost:3000");
});
