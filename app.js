const express=require("express")
const path=require("path")
const app=express()
const middle=require("./middlware")
app.use(middle)
app.get("/",(req,res)=>{
res.send("hello")
})
app.get("/about",(req,res)=>{
	res.send("about page started")
})
app.get("/contact",(req,res)=>{
	res.send("contact page started")
})
app.all("*",(req,res)=>{
	res.status(404).send("<h1>OOPS 404 NOT FOUND</h1>")
}) 
app.listen(4000,()=>{
console.log("Serever listening to port 4000")
})