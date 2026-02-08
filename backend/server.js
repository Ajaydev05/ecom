
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.listen(5000, () => console.log("Backend running on 5000"));


