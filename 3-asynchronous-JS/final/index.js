const adder=new Promise((resolve,reject)=>{
  let name="abebe"
  if (name=="abebe") {
    resolve(`hello ${name}`)
  } else {
    reject("failed")
  }
})
adder.then(
  (data)=>{
console.log(data)
  }
).catch((err)=>{
  console.log(err)
})