import express from "express";

const articles = [{ id: 1, name: "Pinceau", price: 3.21, qty: 456 }];

const app = express.Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
