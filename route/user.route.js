const route = require("express").Router();
const {userSignUp, userLogin,userBookSeat, editBookingSeat, deleteBooking, allReservation } =require("../controller/user.controller");
const {authenticate} = require("../middleware/auth");



const { validateRequest, schemas } = require("../validation/joi_validation");

route.post("/signup" , validateRequest(schemas.signupSchema), userSignUp);
route.post("/login" , validateRequest(schemas.loginSchema), userLogin)
route.post("/booking", validateRequest(schemas.bookingSchema), authenticate, userBookSeat)
route.put("/update/:id",authenticate, editBookingSeat)
route.delete("/delete/:id", authenticate,deleteBooking)
route.get("/reservation",authenticate, allReservation)



module.exports = route