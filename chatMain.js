const express=require('express');

const app=express();
const bodyParser=require('body-parser');
const loginRoute= require('./routes_chat/login');
const messageRoute= require('./routes_chat/message');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',loginRoute);
app.use(messageRoute);

app.listen(4000);



