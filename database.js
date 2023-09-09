const Sequelize =require('sequelize');

const sequelize= new Sequelize('onlineshop', 'root', 'Devraj@07', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;