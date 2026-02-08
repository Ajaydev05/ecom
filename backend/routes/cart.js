const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.get("/cart", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  const user = await User.findById(decoded.id);
  res.json(user.cart);
});

module.exports = router;
