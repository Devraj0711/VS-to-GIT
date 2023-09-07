const mysql= require('mysql2');

const pool = mysql.createPool ({
    host: 'localhost',
    user:'root',
    database:'onlineShop',
    password: 'Devraj@07'
});

module.exports= pool.promise();