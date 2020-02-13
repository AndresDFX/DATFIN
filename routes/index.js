const express = require('express');
const indexController = require('../controllers/index');
const productController = require('../controllers/products');
const router = express.Router();
module.exports = router;

//Index
router.get('/', indexController.index);

//Productos
router.get('/products',productController.ListOfProducts);
router.post('/new-product',productController.AddNewProduct);