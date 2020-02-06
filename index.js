const connection =  require ("./model")
const Controller = require("./controllers/routes")
const express = require("express")
const application = express()
const path = require("path")
const expressHandlebars = require("express-handlebars")
const bodyParser = require("body-parser")
//Above are the requiste extensions

application.use(bodyParser.urlencoded({
    extended : true
}));

application.set('views',path.join(__dirname, "/views/"))   //Join path for extending to Views


application.engine("hbs",expressHandlebars({
    extname :"hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname +"/views/layouts"
}));

application.set("view engine","hbs")     //Handle bar addision

application.get("/",(req,res)=>{
    //res.send('<h1>Hello!!!!<h1>')
    res.render("index",{})
})


application.use("/Users",Controller) 

application.listen("3000",()=>{
    console.log("Server started")
})