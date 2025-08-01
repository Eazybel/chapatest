const express=require("express")
const path=require("path")
const app=express()
app.use(express.static("./public"))
app.get("/",(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./index.html"))
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
app.listen(4040,()=>{
console.log("Serever listening to port 4040")
})