const express=require("express")
const middle=(req,res,next)=>{
	const method=req.method
	const url=req.url
	const date=new Date()
	res.json({
		method:method,
		url:url,
		date:date,
	})

}
module.exports=middle