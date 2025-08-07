const url=require("url")
const http=require("http")
const fs=require("fs")
const replaceTemplate=require("./modules/replaceTemplate")
const slugify=require("slugify")


const tempOverview=fs.readFileSync("./templates/template-overview.html","utf-8")
const tempCard=fs.readFileSync("./templates/template-card.html","utf-8")
const tempProduct=fs.readFileSync("./templates/template-product.html","utf-8")
const data=fs.readFileSync("./dev-data/data.json","utf-8")
const dataObj=JSON.parse(data)
// http modules example
const server=http.createServer((req,res)=>{
  console.log(req.url)
  const {query,pathname}=url.parse(req.url,true)
  console.log(query,pathname)

  const path= req.url
  

if(pathname==="/product")
{
  const product=dataObj[query.id]
  res.writeHead(200,"content-type:text/html")
  const output =replaceTemplate(tempProduct,product)
    res.end(output)
}
else if(pathname==="/api"){
  res.end(data)  
}else if(pathname==="/overview"){
const cardsHtml=dataObj.map(el=>replaceTemplate(tempCard,el)).join("")
const output=tempOverview.replace("{%PRODUCT_CARDS%}",cardsHtml)
res.end(output)
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





// file pathname modules example

// const fs=require("fs")
// const append=fs.readFile("./txt/start.txt","utf-8",(err,res)=>{
// fs.writeFile("./txt/start.txt",res,{flag:"a"},(error)=>{
// })
// })
