const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsController=require('../controllers/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//router.get('/add-product', productsController.getAddProduct);
// /admin/add-product => POST
router.post('/admins/add-product', productsController.postAddProduct);

module.exports = router;

