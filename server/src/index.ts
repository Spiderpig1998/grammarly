import express, { Express } from "express";
import { corsConfig } from "./config/expressConfig";
import { json } from 'body-parser';
import { scoreCard } from "./routes/getTextInfo";
import { errorHandler } from "./middleware/errorHandler";
import 'express-async-errors';

//create express app
const app: Express = express();
app.use(corsConfig);
app.use(json());
app.use(scoreCard);
app.use(express.static('public'));
app.use(errorHandler)
app.listen(8000, () => {
  console.log("server started at http://localhost:3000");
});
