import express from "express";

const app = express();

const port = process.env.PORT ?? 9090;

app.get("/", (req, res) => {
  res.send("This is V1");
});

app.listen(port, () => {
  console.log(`Your Server is live on ${port} port`);
});
