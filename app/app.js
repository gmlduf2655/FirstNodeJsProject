// 앱설정
const express = require("express"); // express 
const ejs = require("ejs"); // ejs
const mysql = require("./models/config/mysql"); // mysql 
const app = express(); // express 사용

// 라우팅
const indexRoute = require("./routes/home/index");
app.use("/", indexRoute);

// view엔진 설정
app.set('view engine', 'ejs');
app.set("views", "./views");

// 정적파일(js,css,image 등) 설정
app.use(express.static(__dirname + "/public"));

let conn = mysql.conn;

module.exports = app;
