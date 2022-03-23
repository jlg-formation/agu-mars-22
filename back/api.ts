import express from "express";
import { v4 as uuidv4 } from "uuid";

let articles = [{ id: 1, name: "Pinceau", price: 3.21, qty: 456 }];

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
  res.status(201).json(article);
});

app.delete("/articles", (req, res) => {
  const ids = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
