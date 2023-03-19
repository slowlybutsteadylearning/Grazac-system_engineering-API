const route = require("express").Router();
const {userSignUp, userLogin,userBookSeat, editBookingSeat, deleteBooking, allReservation } =require("../controller/user.controller");
const {authenticate, authorization} = require("../middleware/auth");
const {getAllUsers, uploadReservation}= require("../controller/admin.controller");


const { validateRequest, schemas } = require("../validation/joi_validation");

route.post("/signup" , validateRequest(schemas.signupSchema), userSignUp);
route.post("/login" , validateRequest(schemas.loginSchema), userLogin)
route.post("/booking", userBookSeat)
route.post("/update",authenticate, editBookingSeat)
route.post("/delete", authenticate,deleteBooking)
route.post("/reservation",authenticate, allReservation)
//admin
route.get("/all",authenticate, authorization(["admin"]), getAllUsers)
route.post("/booking", authenticate,authorization(["admin"]) , uploadReservation)


module.exports = route