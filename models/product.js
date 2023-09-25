const Sequelize = require('sequelize');
    const sequelize = require('../util/database');
  
    // Define the model
    const Product = sequelize.define(req.body.tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      [req.body.columnName]: {
        type: Sequelize[columnType],
        allowNull: req.body.columnProperty === 'true' ? true : false // Convert to boolean
      }
    });

    module.export= Product;
  