import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(3000, function () {
  console.info(`🚀  Server ready at http://localhost:3000`);
});
