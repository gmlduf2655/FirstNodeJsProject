var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    user : "node",
    password : "Rudqnreo1601!",
    database : "board_db",
    port : "3306"
});

conn.connect();

conn.end();

module.exports = conn;