console.log("Web Server boshlash");
const express = require("express");
const app = express() ;
const http =require("http")

// 1 express ga kirib kelyatgan malumotlarga bogliq bolgan kodlar yoziladi. KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());// kirib kelyatgan json formatdagi data ni objectga ogiradi
app.use(express.urlencoded({extended:true})); //html forumdan request qiladi 

//2 Session

//3 BSSR -backend serverside render  VIEWS ga bogliq kodlar
app.set("views", "views");
app.set("view engine","ejs");

//4 routerlarga moljallangan  ,Routin codlar

app.get("/",function(req,res){
    res.end(`<h1 style="background:green">"HELLO WORLD"</h1>`)
});

app.get("/hello",function(req,res){
    res.end(`<h1 style="background:yellow">"Salom bolimi"</h1>`)
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function(){
    console.log(`The server is running succesfully on port : ${PORT}`)
})