const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.findAll()
    .then(rows=>{
      res.render('database/index', {
        prods: rows,
        pageTitle: 'Database Management',
        path:'/database/index'
      })
    })
    .catch(err =>{
      console.log(err);
    });
  }

  exports.getTable = (req, res, next) => {
    Product.findAll()
    .then(rows=>{
      res.render('database/createTable', {
        prods: rows,
        pageTitle: 'Add Table',
        path:'/database/createTable'
      })
    })
    .catch(err =>{
      console.log(err);
    });
  }

  exports.postTable = (req, res, next) => {
    const tableName = req.body.tableName;
    const columns = [];
  
    // Collect column information from request
    req.body.columnName.forEach((columnName, index) => {
      const columnType = req.body.columnType[index];
      const allowNull = req.body.columnProperty[index] === 'allowNull';
  
      columns.push({
        name: columnName,
        type: columnType,
        allowNull: allowNull,
      });
    });
  
    const Sequelize = require('sequelize');
    const sequelize = require('../util/database');
  
    // Define your Sequelize model for the table
    const TableModel = sequelize.define(tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // Define other columns based on user input
      ...columns.reduce((acc, column) => {
        acc[column.name] = {
          type: Sequelize[column.type],
          allowNull: column.allowNull,
        };
        return acc;
      }, {}),
    });
  
    // Synchronize the model with the database to create the table
    sequelize
      .sync()
      .then(() => {
        res.send(`Table ${tableName} created successfully.`);
      })
      .catch((error) => {
        console.error('Error creating table:', error);
        res.status(500).send('Error creating table.');
      });
  };
  