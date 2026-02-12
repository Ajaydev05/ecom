const express = require("express");
const mongoose = require("mongoose");
const products = require("./routes/products");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo connected"));

app.use("/api", products);

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on 5000");
});
