const fs=require("fs")
const server=require("http").createServer()
server.on("request",(req,res)=>{
  // fs.readFile("./test-file.txt",(err,data)=>{
  //   if (err) {
  //     console.log(err)
  //   }
  //   res.end(data)
  // })
//Solution 1
//   const readable=fs.createReadStream("test-file.txt")
// readable.on("data",(chunk)=>{
//   res.write(chunk)
// })
// readable.on("end",()=>{
//   res.end()
// })
// readable.on("err",(err)=>{
//   console.log(err)
//   res.end()
// })
// solution 2
  const readable=fs.createReadStream("test-file.txt")
readable.pipe(res)
})

server.listen(5000,()=>{
console.log("  server running on port 5000");

})