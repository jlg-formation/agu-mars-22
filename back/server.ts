console.log("Je demarre le serveur web.");

import express, { NextFunction, Request, Response } from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { api } from "./api";

const port = 3000;
const wwwDir = "./public";

const app = express();

const accessLog = (req: Request, res: Response, next: NextFunction) => {
  console.log("req: ", req.url);
  next();
};

app.use(accessLog);
app.use(cors());

app.use("/api", api);

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir));

app.listen(port, () => {
  console.log(`Server started successfully at port ${port}`);
});
