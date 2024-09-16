import express, {Request, Response} from "express";
import fs from "node:fs/promises";
import {fillTemplate} from "./utils/fillTemplate.js";
import errorHandler from "./middleware/errorHandler.js"

const app = express();
const port: Number = Number(process.env["PORT"]) || 3030;
const layout = await fs.readFile("views/layout.html", "utf-8");

app.get('/', (req: Request, res: Response, next: Function) => {
  res.send(fillTemplate(layout, {}));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})