
//모듈
var express = require('express')
var cors = require('cors')
var app = express()
const PORT = 3000;
 
app.use(cors())

app.use(express.static(`${__dirname}/src/public`))


//라우팅
const home = require("./src/routes/home");


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어

module.exports = app;

// app.get('/sound/:name', function (req, res) {
//     const { name } = req.params

//     if(name == "dog"){
//         res.json({'sound' : '멍멍'})
//     } else if (name == 'cat') {
//         res.json({'sound' : '냐옹'})        
//     } else {
//         res.json({'sound' : '알수없음'})
//     }
//     console.log(name)

// })

