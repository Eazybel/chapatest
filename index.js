const url=require("url")
const http=require("http")
const fs=require("fs")

const data=fs.readFileSync("./dev-data/data.json","utf-8")
const dataObj=JSON.parse(data)

// http modules example
const server=http.createServer((req,res)=>{
  const path= req.url
if(path==="/profile")
{
    res.end("Welcome Ezedin")
}
else if(path==="/api"){
  res.end(data)  
}

else{
    res.writeHead(404,
   {
    "content-type":"text/html",
    "status-code":"404"
})

res.end("<h1>404 NOT FOUND</h1>")
}
})








server.listen(5000,"127.1.1.1",()=>{
    console.log("server listning on port 5000 and url 127.1.1.1")
})





// file path modules example

// const fs=require("fs")
// const append=fs.readFile("./txt/start.txt","utf-8",(err,res)=>{
// fs.writeFile("./txt/start.txt",res,{flag:"a"},(error)=>{
// })
// })
