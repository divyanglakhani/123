const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Dummy data
const products = [
  {
    id: 1,
    title: "40 GM",
    price: "20",
    image: "https://chhappaiyamasala.netlify.app//img/Chhappaiya%2040gm.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "350 GM",
    price: "80",
    image: "https://chhappaiyamasala.netlify.app//img/Chhappaiya%20350gm.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "1 KG",
    price: "210",
    image: "https://chhappaiyamasala.netlify.app//img/Chhappaiya%201kg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "20 KG",
    price: "2800",
    image: "https://chhappaiyamasala.netlify.app//img/Chhappaiya%2020kg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

// Middleware to parse JSON
app.use(express.json());

// API routes
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
