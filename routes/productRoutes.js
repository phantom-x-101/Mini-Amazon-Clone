const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, searchProducts } = require('../controllers/productController');

router.post('/', createProduct);                 // Add a product
router.get('/', getAllProducts);                 // See all products
router.get('/search', searchProducts);           // Search for products

module.exports = router;
