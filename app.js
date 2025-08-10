const { log } = require("console")
const express=require("express")
const userRoute=require("./router/usersRouter")
const tourRoute=require("./router/toursRouter")
const morgan=require("morgan")
const app=express()
app.use(express.json())
app.use(express.static("./4-natours/starter/public"))
//3rd party Middlewares
app.use(morgan("dev"))

app.use("/api/v2/users",userRoute)
app.use("/api/v2/tours",tourRoute)
module.exports=app