const route = require("express").Router();
const {userSignUp, userLogin,userBookSeat, editBookingSeat, deleteBooking, allReservation } =require("../controller/user.controller");
const {authenticate} = require("../middleware/auth");
const {authorization}= require("../middleware/authorize")
const {getAllUsers, uploadReservation, allBooking}= require("../controller/admin.controller");


const { validateRequest, schemas } = require("../validation/joi_validation");

route.post("/signup" , validateRequest(schemas.signupSchema), userSignUp);
route.post("/login" , validateRequest(schemas.loginSchema), userLogin)
route.post("/booking",authenticate, userBookSeat)
route.put("/update",authenticate, editBookingSeat)
route.delete("/delete", authenticate,deleteBooking)
route.get("/reservation",authenticate, allReservation)
//admin
route.get("/all",authenticate, authorization(["admin"]), getAllUsers)
route.post("/upload", authenticate,authorization(["admin"]), uploadReservation)
route.get("/allbookings",authenticate, authorization(["admin"]), allBooking)


module.exports = route