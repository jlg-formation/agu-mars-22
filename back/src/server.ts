console.log("Je demarre le serveur web.");

import express, { NextFunction, Request, Response } from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { api } from "./api";
import path from "path";

const port = +process.env.CNMSS_PORT || 3000;
const wwwDir = "../front/dist/front";

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

// url rewriting
app.get("/*", (req, res) => {
  res.sendFile("index.html", {
    root: path.resolve(wwwDir),
  });
});

app.listen(port, () => {
  console.log(`Server started successfully at port ${port}`);
});
