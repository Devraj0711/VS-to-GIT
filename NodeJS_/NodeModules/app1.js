const http= require('http');

const express= require('express');

const bodyParser= require('body-parser');

const app= express();

app.use(bodyParser.urlencoded());
app.use('/', (req,res, next)=>{
    console.log('This always run');
    next();  // allows the request to continue to the next middlewear in line
});

app.use('/add-product',(req,res, next)=>{
    console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><label>Enter Name</label><input type="text" name="title"> <label>Enter Size</label><input type="number" name="size"><button type="submit">Add Product</button></form>')// ...
});

app.use('/product', (req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req,res,next)=>{
    console.log("In another middleware!");
    res.send('<h1> Hey from Express!</h1>');
});

//const routes= require('./routes');
//console.log(routes.someText);

//instead of below code:-
//const server=http.createServer(app);
//server.listen(3000);

//we can use 
app.listen(3000);