const fs=require("fs")
setTimeout(()=>{
console.log("hello timeout")
},0)
setImmediate(()=>{console.log("helloo immediate")})
fs.readFile("./test-file.txt","utf-8",(err,req)=>{
console.log("file readed I/O")
})
console.log("hello from the top level")