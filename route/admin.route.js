const route = require("express").Router();
const {authenticate} = require("../middleware/auth");
const {authorization}= require("../middleware/authorize")
const {getAllUsers, uploadTrainService, allBooking}= require("../controller/admin.controller");




route.get("/all",authenticate, authorization(["admin"]), getAllUsers)
route.post("/upload", authenticate,authorization(["admin"]), uploadTrainService)
route.get("/allbookings",authenticate, authorization(["admin"]), allBooking)

module.exports= route