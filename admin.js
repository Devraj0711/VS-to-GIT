const express = require('express');

const router= express.Router();

// /admin/add-product ==>get
router.get('/add-product',(req,res,next)=> {
    res.send(
        '<form action="/admin-product" method="POST"><label>Enter Name</label><input type="text" name="title"> <label>Enter Size</label><input type="number" name="size"><button type="submit">Add Product</button></form>'
        );
});

// /admin/add-product ==>POST
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports =router;