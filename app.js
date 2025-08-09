const { log } = require("console")
const express=require("express")
const fs=require("fs")
const app=express()
const port=4000
app.use(express.json())
const tours=JSON.parse(fs.readFileSync("./4-natours/starter/dev-data/data/tours-simple.json"))
const getAllTours=(req,res)=>{
  
res.status(200).json({
    status:"sucess",
    data:{
        tours:tours
    }
})
}
const getTour=(req,res)=>{

    console.log(req.params)
    const id=req.params.id*1
    if(id>tours.length){
        res.status(404).send("Am sorry thers no tour specified by this id")
    }
    const tour=tours.find(el=>el.id===id)
console.log(id);

    res.status(200).json({
        status:"sucess",
        data:{
            tour
        }
    })


}
const patchTour=(req,res)=>{

    const id=req.params.id*1
    if(id>tours.length){
        res.status(404).send("Am sorry thers no tour specified by this id")
    }
    res.status(200).json({
        status:"sucessful",
        data:"sucessfully patched"
    })
}
const deleteTour=(req,res)=>{

    const id=req.params.id*1
    if(id>tours.length){
        res.status(404).send("Am sorry thers no tour specified by this id")
    }
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

}


app.route("/api/v2/tours")
.get(getAllTours)
.post(postTour)

app.route("/api/v2/tours/:id")
.patch(patchTour)
.delete(deleteTour)
.get(getTour)
app.listen(port,()=>{
    console.log("server started in port 4000")
})