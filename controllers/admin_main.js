const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(rows=>{
    res.render('expense/index', {
      prods: rows,
      pageTitle: 'Expense Page',
      path: 'expense/index'
    });
  })
  .catch(err =>{
    console.log(err);
  });
};

exports.getAddExpense = (req, res, next) => {
  res.render('expense/add-expense', {
    pageTitle: 'Add Expense',
    path: 'expense/add-expense',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
  
}

exports.postAddExpense = (req, res, next) => {

  console.log("hey", req.body.Amount);
  const Amount = req.body.Amount;
  const description = req.body.description;
  const Category = req.body.Category;
  console.log(Amount);
  Product.create({
    Amount: Amount,
    description: description,
    Category: Category
  })
  .then(result => {
    console.log(result);
    res.redirect('/'); // Redirect to a success page or wherever appropriate
  })
  .catch(err => {
    console.error('Error inserting data: ', err);
    // Handle the error appropriately
  });
  
};

/**exports.getProduct =(req,res,next) => {
  const prodId= req.params.productId;
  Product.findById(prodId)
  .then((product)=>{
    res.render('shop/product-detail',{
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  }) 
  .catch(err=> console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(rows=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path:'/'
    })
  })
  .catch(err =>{
    console.log(err);
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

**/
