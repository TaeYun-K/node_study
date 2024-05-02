
//모듈
var express = require('express')
var cors = require('cors')
const bodyParser = require("body-parser")
var app = express()
const PORT = 3000;

app.use(cors())



//라우팅
const home = require("./src/routes/home");


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true })) //url을 통해 전달되는 데이터에 한글 인식 문제 해결

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

