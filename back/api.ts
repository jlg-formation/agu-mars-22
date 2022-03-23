import express from "express";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";

const filename = "data/articles.json";

let articles = [];
(async () => {
  try {
    const str = await fs.readFile(filename, { encoding: "utf-8" });
    articles = JSON.parse(str);
  } catch (err) {}
})();

const save = async () => {
  await fs.writeFile(filename, JSON.stringify(articles, null, 2));
};

const app = express.Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  const article = req.body;
  article.id = uuidv4();
  articles.push(article);
  save();
  res.status(201).json(article);
});

app.delete("/articles", (req, res) => {
  const ids = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  save();
  res.status(204).end();
});

export const api = app;
