const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize =require('./util/database');

const Product= require('./models/product');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

app.use((req, res, next)=> {
    User.findOne({where: {id:1}})
    .then(user => {
        req.user =user;
        next();
    })
    .catch(err=> console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

//use of sequelize to carry on all the DB commands
sequelize
//.sync({force: true})// overrides the table when the code is re-run. Tables content gets deleted
.sync()
.then(result =>{
    //console.log(result);
    return User.findOne({ where: { id: 1 } });
})
.then(user => {
    if(!user)
    {
        return User.create({name:'Max', email:'test@test.com'});
    }
    return user;
})
.then(user => {
    console.log(user);
    app.listen(4000);
})
.catch(err => {
    console.log(err);
});

