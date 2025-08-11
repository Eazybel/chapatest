const dotenv=require("dotenv").config({path:"./config.env"})
const mongoose=require("mongoose")
const DB=process.env.DATABASE

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then(con=>{
    console.log(con)
}).catch(err=>{
    console.log(err)
})
const tourSchema=new mongoose.Schema({
        name:{
            type:String,
            required:[true,"please insertthe name"],
            unique:true
        },
        price:{
                type:Number,
                required:[true,"please insertthe price"],
        },
        rate:{
            type:Number,
            default:4.5

        }
})

const Tour=mongoose.model("Tour",tourSchema)
const test=new Tour({
    name:"ezedinu2",
    price:20073,
    rate:4.8
})

test.save().then(doc=>{
    console.log(doc)
}).catch(err=>{
    console.log(err)
})
module.exports=Tour