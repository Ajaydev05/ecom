const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://mongo:27017/ecommerce");

const products = [
  // CLOTHING
  { name: "Casual T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", category: "clothing" },
  { name: "Denim Jacket", price: 1599, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", category: "clothing" },
  { name: "Hoodie", price: 1299, image: "https://images.unsplash.com/photo-1542060748-10c28b62716e", category: "clothing" },
  { name: "Formal Shirt", price: 999, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10", category: "clothing" },
  { name: "Jeans", price: 1399, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246", category: "clothing" },

  // BOOKS
  { name: "Clean Code", price: 799, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765", category: "books" },
  { name: "DevOps Handbook", price: 899, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", category: "books" },
  { name: "System Design Interview", price: 999, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794", category: "books" },
  { name: "JavaScript Guide", price: 699, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353", category: "books" },
  { name: "Python Crash Course", price: 849, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93", category: "books" },

  // ELECTRONICS
  { name: "Wireless Headphones", price: 2499, image: "https://images.unsplash.com/photo-1518443895471-1e4c5c1b8a0c", category: "electronics" },
  { name: "Smart Watch", price: 3499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", category: "electronics" },
  { name: "Bluetooth Speaker", price: 1999, image: "https://images.unsplash.com/photo-1512446816042-444d6412673a", category: "electronics" },
  { name: "Laptop Stand", price: 1299, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04", category: "electronics" },
  { name: "Wireless Mouse", price: 799, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04", category: "electronics" },

  // ACCESSORIES
  { name: "Backpack", price: 1199, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", category: "accessories" },
  { name: "Cap", price: 399, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", category: "accessories" },
  { name: "Wallet", price: 699, image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc", category: "accessories" },
  { name: "Sunglasses", price: 999, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083", category: "accessories" },
  { name: "Watch Strap", price: 499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", category: "accessories" }
];

async function seed() {
  await Product.deleteMany(); // optional: clears old data
  await Product.insertMany(products);
  console.log("20 products inserted");
  process.exit();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
