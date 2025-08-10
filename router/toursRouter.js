const express=require("express")
const morgan=require("morgan")
const app=express()
const router=express.Router()
const {getAllTours,getTour,patchTour,deleteTour,postTour,checkId,checkBody}=require("../controller/tourController")

router.param("id",checkId)
//2 tour router
app.use("/api/v2/tours",router)
router.route("/")
.get(getAllTours)
.post(checkBody,postTour)

router.route("/:id")
.patch(patchTour)
.delete(deleteTour)
.get(getTour)


module.exports=router