const dotenv=require("dotenv").config({path:"./config.env"})
const app=require("./app")
const morgan=require("morgan")
const Tour=require("./model/tourModel")
const port=process.env.PORT||4000

morgan("dev")
app.listen(port,()=>{
    console.log("server started in port 4000")
})