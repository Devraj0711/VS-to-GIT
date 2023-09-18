const Sequelize= require('sequelize');

const sequelize= require('../util/database');

const Product = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Amount: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  },
  Category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports= Product;