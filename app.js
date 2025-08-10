const { log } = require("console")
const express=require("express")
const morgan=require("morgan")
const fs=require("fs")
const app=express()
const port=4000
//3rd party Middlewares
app.use(express.json())
app.use(morgan("dev"))
// file fetcher
const tours=JSON.parse(fs.readFileSync("./4-natours/starter/dev-data/data/tours-simple.json"))
// custom middlewares
app.use((req,res,next)=>{
    console.log("hello from the middle ware")
    next()
})
app.use((req,res,next)=>{
    req.requestTime= new Date().toISOString()
    next()
})

// route functions for tour
const getAllTours=(req,res)=>{
    console.log(req.requestTime)
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
// route function for user
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
    res.send("user deleted")
}
// Router Middlewares
const tourRouter=express.Router()
const userRouter=express.Router()
app.use("/api/v2/tours",tourRouter)
app.use("/api/v2/users",userRouter)


//tour refraactors
tourRouter.route("/")
.get(getAllTours)
.post(postTour)

tourRouter.route("/:id")
.patch(patchTour)
.delete(deleteTour)
.get(getTour)

// user refractours
userRouter.route("/")
.get(getAllUsers)
.post(postUser)

userRouter.route("/:id")
.patch(patchUser)
.delete(deleteUser)
.get(getUser)



app.listen(port,()=>{
    console.log("server started in port 4000")
})