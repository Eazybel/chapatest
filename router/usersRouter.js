const express= require("express")
const router=express.Router()
const morgan=require("morgan")
const app=express()
app.use(morgan("dev"))
app.use(express.json())
const{getAllUsers,getUser,postUser,patchUser,deleteUser,}=require("../controller/userController")

router.param("id",(req,res,next,val)=>{
    console.log(`this is ${val} params`)
    next()
})

router.route("/")
.get(getAllUsers)
.post(postUser)

router.route("/:id")
.patch(patchUser)
.delete(deleteUser)
.get(getUser)
module.exports=router