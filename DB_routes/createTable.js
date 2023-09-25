const path = require('path');

const express = require('express');

const adminController = require('../DB_controllers/createTable');

const router = express.Router();

// /admin/add-product => GET
router.get('/', adminController.getIndex);
router.get('/create', adminController.getTable);
router.post('/create', adminController.postTable);

module.exports = router;
