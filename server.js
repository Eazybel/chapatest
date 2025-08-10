const dotenv=require("dotenv")
const app=require("./app")
const morgan=require("morgan")
const port=process.env.PORT||4000
morgan("dev")
app.listen(port,()=>{
    console.log("server started in port 4000")
})