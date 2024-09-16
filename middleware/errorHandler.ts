import {Request, Response} from "express";

function errorHandler(err: Error, req: Request, res: Response, next: Function) {
  console.error(err.stack);
  res.status(500).send("Internal server error");
}

export default errorHandler;