const express = require('express');
const app = express();
const hbs = require('hbs');
const port= process.env.PORT || 5000 ;
const path = require('path');


//static path

const static_path = path.join(__dirname,"../public");
const tamplate_path = path.join(__dirname,"../tamplates/views");
const partials_path = path.join(__dirname,"../tamplates/partials");


app.set('view engine','hbs');
app.set('views',tamplate_path);
hbs.registerPartials(partials_path)



app.use(express.static(static_path));





app.get("/",(req , res)=>(
    res.render("index")
))

app.get("/login",(req , res)=>(
    res.render("login")
))

app.get("/cont",(req , res)=>(
    res.render("cont")
))


app.get("/create",(req , res)=>(
    res.render("create")
))

app.get("/createem",(req , res)=>(
    res.render("createem")
))

app.get("/game1",(req , res)=>(
    res.render("game1")
))

app.get("/game2",(req , res)=>(
    res.render("game2")
))

app.get("/join",(req , res)=>(
    res.render("join")
))

app.get("/joinem",(req , res)=>(
    res.render("joinem")
))
app.get("/option",(req , res)=>(
    res.render("option")
))

app.get("/rooms",(req , res)=>(
    res.render("rooms")
))

app.get("/roomsem",(req , res)=>(
    res.render("roomsem")
))

app.get("/register",(req , res)=>(
    res.render("register")
))



app.get("*",(req , res)=>(
    res.send("Error 404")
))








app.listen(port , ()=>{
    console.log(`listening to port at ${port}`)
})
