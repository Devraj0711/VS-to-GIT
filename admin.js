const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(result => {
    console.log(result);
    res.redirect('/'); // Redirect to a success page or wherever appropriate
  })
  .catch(err => {
    console.log(err);
    // Handle the error appropriately, e.g., send an error response or render an error page
  });
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: 'admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => {
      // Handle the error, e.g., send an error response or log it
      console.error(err);
      res.status(500).send('An error occurred while fetching the product.');
    });
};

exports.postEditProduct = (req,res,next) => {
  const prodId= req.body.productId;
  const updatedTitle= req.body.title;
  const updatedPrice= req.body.price;
  const updatedImageUrl= req.body.imageUrl;
  const updatedDesc= req.body.description;
  Product.findById(prodId)
  .then(product => {
    product.title =updatedTitle;
    product.price= updatedPrice;
    product.description= updatedDesc;
    product.imageUrl= updatedImageUrl;
    return product.save();
  })
  .then(result => {
    console.log('UPDATED PRODUCT!');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct= (req, res, next) => {
  const prodId =req.body.productId;
  Product.findById(prodId)
  .then(product => {
    return product.destroy();
  })
  .then(result => {
    console.log("DESTROYED PRODUCT");
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};