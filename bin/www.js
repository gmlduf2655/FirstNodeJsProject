const app = require("../app");
const PORT = 3000;

// app.listen() 모듈화
app.listen(PORT,() => {
    console.log("Nodejs First WebPage");
    console.log("__dirname : " + __dirname);
});