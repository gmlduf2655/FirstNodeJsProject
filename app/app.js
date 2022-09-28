// 앱설정
const express = require("express"); // express 
const bodyParser = require("body-parser"); // body-parser
const ejs = require("ejs"); // ejs
const mysql = require("./models/config/mysql"); // mysql 
const app = express(); // express 사용

// view엔진 설정
app.set('view engine', 'ejs');
app.set("views", "./src/views");

// body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

// 정적파일(js,css,image 등) 설정
app.use(express.static(__dirname + "/src/public"));

// 라우팅
const indexRoute = require("./src/routes/home/index");
app.use("/", indexRoute);

let conn = mysql.conn;

module.exports = app;
