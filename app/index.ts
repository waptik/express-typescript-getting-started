import express, { Express } from "express";

const app: Express = express();
const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello World from Express serverless!");
});

app.get("/users", (_req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
