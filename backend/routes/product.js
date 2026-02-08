const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Casual T-Shirt",
      price: 499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      _id: 2,
      name: "DevOps Book",
      price: 899,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    }
  ]);
});

module.exports = router;
