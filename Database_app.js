const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./DB_controllers/error');

const sequelize =require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./DB_routes/createTable');


//testing code
/**db.execute('SELECT * FROM Products')
.then(result=>{
    console.log(result[0], result[1]);
})
.catch(err =>{
    console.log(err);
});**/ 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.use(errorController.get404);  

//use of sequelize to carry on all the DB commands
sequelize
.sync()
.then(result =>{
    //console.log(result);
    app.listen(2000);
})
.catch(err => {
    console.log(err);
});

