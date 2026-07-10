// შექმენი პროდუქტის CRUD სისტემა MongoDB-ის დახმარებით (npm i mongoose). უნდა არსებობდეს შემდეგი endpoint-ები: GET (ყველა პროდუქტი), GET/:id (ID-ით პოვნა), POST (შექმნა), PUT (განახლება), DELETE (წაშლა) + pagination (/products?page=1&limit=5).
// მოდელის ველები უნდა იყოს: name, price, category, description - მხოლოდ description უნდა იყოს optional.
// დაამატე check  - minprice(2) და maxprice(4000).
// Update-ის დროს (PUT) body ველები უნდა იყოს სავალდებულო.

const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./connect.db");
const productModel = require("./models/product.model");
const { isValidObjectId } = require("mongoose");

const app = express();
const PORT = 3030;

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/products", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  const skip = (page - 1) * limit;

  const products = await productModel.find().skip(skip).limit(limit);

  res.json({
    message: "finded successfully",
    data: products,
  });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid mongo id" });
  }

  const findProductById = await productModel.findById(id);

  res.json({
    message: "finded successfully",
    data: findProductById,
  });
});

app.post("/products", async (req, res) => {
  const { name, price, category, description } = req.body;

  if (!name || !price || !category) {
    return res.json({
      message: "name price and category are required",
    });
  }

  if (price < 2 || price > 4000) {
    return res.json({
      message: "price must be between 2 and 4000",
    });
  }

  const createProduct = await productModel.create({
    name,
    price,
    category,
    description,
  });

  res.json({
    message: "created successfully",
    data: createProduct,
  });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;

  const { name, price, category, description } = req.body;

  if (!isValidObjectId(id)) {
    return res.json({
      message: "invalid id",
    });
  }

  if (!name || !price || !category || !description) {
    return res.json({
      message: "all fields are required",
    });
  }

  if (price < 2 || price > 4000) {
    return res.json({
      message: "price must be between 2 and 4000",
    });
  }

  const updatedProduct = await productModel.findByIdAndUpdate(
    id,
    { name, price, category, description },
    { new: true },
  );

  res.json({
    message: "updated successfully",
    data: updatedProduct,
  });
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.json({
      message: "invalid id",
    });
  }

  const deletedProduct = await productModel.findByIdAndDelete(id);

  res.json({
    message: "deleted successfully",
    data: deletedProduct,
  });
});

app.listen(PORT, () => {
  console.log({
    message: `Server is running on port http://localhost:${PORT}`,
  });
});
