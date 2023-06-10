const express = require("express")
const app = express()
const products = require("./products")
const mongoose = require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")

console.log(Content)
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://saivamsi1590:saivamsi1590@cluster0.mwgyhu4.mongodb.net/")

.then(()=>{
    console.log("mongodb connected successfully")
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>{
    res.send("server started successfully")
})

app.post("/add",(req,res)=>{
    console.log("data from front end",req.body)
    const {name,passcode}=req.body
    const newData=new SVGTextContentElement({
        name,passcode
    })
    newData.save()
    res.send("added")

})

app.get("/retrieve",(req,res)=>{
    Content.find()
    .then(found=>res.json(found))
})

app.get("/name",(req,res)=>{
    res.send("codegnan")
})

app.get("/products",(req,res)=>{
    res.json(products)
})
app.listen(4000,()=>console.log("server is started"))