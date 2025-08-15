const Product = require('../models/Product');

// Add a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  try {
    const product = new Product({ name, description, price, category, stock });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Show all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search for products
exports.searchProducts = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({ name: { $regex: query, $options: 'i' } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
