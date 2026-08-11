//the first imports like express to create and configure the API
const express = require("express");
const cors = require("cors");

//load data from .env file
require("dotenv").config();

//creating an express app
const app = express();

//enable cors first before the routes
app.use(cors());
app.use(express.json());

//this is the in-memory array(i didnt want to do the stretch goal, because the task asks to use in-memory...)
let products = [
  {
    id: 1,
    name: "Laptop",
    price: 15999.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Gaming mouse",
    price: 799.0,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Mechanical keyboard",
    price: 1299.0,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Rooibos tea",
    price: 12.0,
    category: "Beverages",
  },
];

//GET and POST the products
app.get("/products", (req, res) => {
  res.json(products);
});
app.post("/products", (req, res) => {
  const { name, price, category } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category,
  };

  products.push(newProduct);

  res.status(201).json(products);
});

//this is for the stretch goal
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, price, category } = req.body;

  //find product that matches the id
  const product = products.find((product) => product.id === id);

  //404 if it doesnt exist
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  product.name = name;
  product.price = price;
  product.category = category;

  res.json(products);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((product) => product.id !== id);

  res.json(products);
});

//gets the port from env file
const PORT = process.env.PORT || 3000;

//and now start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
