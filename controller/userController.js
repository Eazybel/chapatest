const express=require("express")
const morgan=require("morgan")
morgan("dev")

const app=express()



const getAllUsers=(req,res)=>{
    res.send("All users getted")
}
const postUser=(req,res)=>{
    res.send("All users posted")
}
const patchUser=(req,res)=>{
    res.send("All users patched")
}
const deleteUser=(req,res)=>{
    res.send("All users deleted")
}
const getUser=(req,res)=>{
    res.send("user getter")
}
module.exports={getAllUsers,getUser,postUser,patchUser,deleteUser}