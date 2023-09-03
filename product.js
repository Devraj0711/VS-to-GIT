const products = [];

exports.postAddProduct = (req, res, next) => {
    const newProduct = { title: req.body.title };
    console.log('New Product:', newProduct);
    products.push(newProduct);
    console.log('Products Array:', products);
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true    
    });
};
