console.log("Je demarre le serveur web.");

const express = require("express");

const port = 3000;

const app = express();

app.get("/truc", (req, res) => {
  console.log("req: ", req.url);
  res.status(234).send("hello");
});

app.listen(port, () => {
  console.log(`Server started successfully at port ${port}`);
});
