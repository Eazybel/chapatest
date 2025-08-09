const express=require("express")
const app=express()
const port=4000
// app.get("/",(req,res)=>{
//     res.status(200).json(
//         {"Message":"Server started sucessfully with get"}
//     )
// })
// app.post("/",(req,res)=>{
//     res.status(200).json(
//         {"Message":"Server started sucessfully with post"}
//     )
// })
app.get("/api/v2/tours",(req,res)=>{

})
app.listen(port,()=>{
    console.log("server started in port 4000")
})