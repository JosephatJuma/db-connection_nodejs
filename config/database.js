
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: 'database13',
    database: "ufarm1"          
})

module.exports = connection;