const http= require('http');

const express= require('express');

const app= express();

app.use((req,res, next)=>{
    console.log('In the middleware!');
    next();  // allows the request to continue to the next middlewear in line
});

app.use((req,res, next)=>{
    console.log('In 2nd middleware!');
    res.send('<h1>Hello from Express!</h1>')// ...
});

//const routes= require('./routes');
//console.log(routes.someText);

//instead of below code:-
const server=http.createServer(app);
server.listen(3000);

//we can use 
app.listen(3000);