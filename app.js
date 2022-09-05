const express = require("express");
const ejs = require("ejs");
const mysql = require("./models/config/mysql");
const app = express();
const indexRoute = require("./routes/home/index");
app.use("/", indexRoute);
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));
let conn = mysql.conn;

app.listen(3000,function(){
    console.log("Nodejs First WebPage");
    console.log("__dirname : " + __dirname);
});
