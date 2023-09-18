const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin_main');

const router = express.Router();



router.get('/add-expense', adminController.getAddExpense);

router.post('/expense/add-expense', adminController.postAddExpense);

router.get('/', adminController.getIndex);
/**
router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout); **/

module.exports = router;
