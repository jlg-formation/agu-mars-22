console.log("Je demarre le serveur web.");

const express = require("express");
const serveIndex = require("serve-index");
const api = require("./api");

const port = 3000;
const wwwDir = "./public";

const app = express();

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use("/api", api);

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir));

app.listen(port, () => {
  console.log(`Server started successfully at port ${port}`);
});
