const EventEmiter=require ("events")
const http=require ("http")
class Sales extends EventEmiter{
  constructor(){
    super()
  }
}
const emiter=new Sales()

emiter.on("order",(food1,food2)=>{
  console.log("Sucess")
})
emiter.on("order",(food1,food2)=>{
  console.log("none")
})

emiter.emit("order","pizza","coka")

const server= http.createServer()
server.on("request",(req,res)=>{
  console.log("server is on")
})

server.listen(5000,()=>{
  console.log("surver running on port 5000")
})
