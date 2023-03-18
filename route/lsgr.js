const route = require("express").Router();
const {userSignUp, userLogin,userBookSeat } =require("../controller/user.controller");
const {isAuthenticated, authorization} = require("../middleware/auth");
const {getAllUsers, uploadReservation}= require("../controller/admin.controller");


const { validateRequest, schemas } = require("../validation/joi_validation");

route.post("/signup" , validateRequest(schemas.signupSchema), userSignUp);
route.post("/login" , validateRequest(schemas.loginSchema), userLogin)
route.post("/booking", userBookSeat)
route.get("/all",isAuthenticated,authorization(["admin"]), getAllUsers)

module.exports = route