import express from "express";
import type {Request, Response} from "./types.ts";
// import {fillTemplate, updateTableTags} from "./utils/fillTemplate";
import readFile from "./utils/fileReader.js";

async function main() {
  const res = await readFile("views/layout.html");
  console.log(res);
}
main();


const app = express();
const port: Number = Number(process.env.PORT) || 3030;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// })