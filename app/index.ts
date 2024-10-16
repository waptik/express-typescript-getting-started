import express, {Express} from "express";
import serverless from "serverless-http";

const app: Express = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World from Express serverless!");
});

app.get("/users", (_req, res) => {
  res.json([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]);
});

if (process.env.NODE_ENV === "dev") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export const handler = serverless(app);