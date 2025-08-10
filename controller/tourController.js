const express=require("express")
const morgan=require("morgan")
const fs=require("fs")
const { type } = require("os")
const app=express()
app.use(morgan("dev"))
app.use(express.json())

// file fetcher
const tours=JSON.parse(fs.readFileSync("./4-natours/starter/dev-data/data/tours-simple.json"))
//1 tour controllers

const checkId=(req,res,next,val)=>{
        if(req.params.id>tours.length){
        return res.status(404).send("Am sorry thers no tour specified by this id")
    }
    next()
}
const checkBody=(req,res,next)=>{
        if(!req.body.name){
        return res.status(404).send("Am sorry fuck yoou")
    }
    next()
}

const getAllTours=(req,res)=>{
    const id=req.params.id*1
    console.log(req.requestTime)
res.status(200).json({
    status:"sucess",
    data:{
        tours:tours
    }
})
}
const getTour=(req,res)=>{
const id=req.params.id*1
    const tour=tours.find(el=>el.id===id)
    res.status(200).json({
        status:"sucess",
        data:{
            tour
        }
    })


}
const patchTour=(req,res)=>{
    const id=req.params.id*1
    res.status(200).json({
        status:"sucessful",
        data:"sucessfully patched"
    })
}
const deleteTour=(req,res)=>{
    const id=req.params.id*1
    res.status(200).json({
        status:"sucessful",
        data:"sucessfully deleted"
    })

}
const postTour=(req,res)=>{
const newId=tours[tours.length-1].id+1
const newTour=Object.assign({id:newId},req.body)
tours.push(newTour)
fs.writeFile("./4-natours/starter/dev-data/data/tours-simple.json",JSON.stringify(tours),err=>{
    res.status(201).json({
        status:"sucess",
        data:{
            tours:newTour
        }
    })
})
console.log(req.body)
}

module.exports={getAllTours,getTour,postTour,patchTour,deleteTour,checkId,checkBody}