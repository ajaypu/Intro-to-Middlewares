import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 4000;

// middleware...
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><input type='number' name='title'><button type='submit'>Add Product<button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
