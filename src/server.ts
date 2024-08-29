import express from "express"
import {Request, Response} from "./types"

const app = express();
const port: Number = Number(process.env.PORT) || 3030;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})