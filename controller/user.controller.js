const User = require("../model/user.model");
const Booking = require("../model/service.booking.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createJWT = require("../utils/jwt")

//user sign up
const userSignUp = async (req, res) =>{
    const {first_name, last_name, email, password, phone} = req.body
    try {
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(409).json({
                message:"Email already Exist"
            })
        }
        const salt =10
        const hashedPassword =await bcrypt.hash(password, salt);
       
        const newUser = await User.create({
            first_name,last_name,email, password :hashedPassword, phone
            });

            return res.status(201).json({
                message:"Account successfully created",
                data:newUser
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}

// login
const userLogin = async(req,res)=>{
    const {email, password} = req.body
    try {
        const userExistInDb = await User.findOne({email})
        if (!userExistInDb){
            return res.status(404).json({
                message:"User not found"
            })
        }
    const isMatchedPassword = await bcrypt.compare(password, userExistInDb.password)
    if (!isMatchedPassword){
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }
    const token = await createJWT({
        id: userExistInDb._id,
        email: userExistInDb.email,
        firstname: userExistInDb.firstname,
      });
  

        res.cookie("access_token", token, {
            expires: new Date(Date.now()   +   30000),
            httpOny: true
        })

        return res.status(200).json({
            message:"Login Successfully", 
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
    })
}
}


//book a seat

const userBookSeat = async (req,res) =>{
    const { id } = req.params;
    const {user_id, service_type, seat_number, booking_time}= req.body
    try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const seat_booked = await Booking.findOne({seat_number})
    if(seat_booked) return res.status(409).json({message:"Seat not available"})

    const new_booking = await Booking.create(
        {
        user_id:user._id,
        service_type,
        seat_number,
        booking_time
    });
    return res.status(201).json({ message:"Seat number successfully booked", new_booking})

} catch (error) {
    return res.status(500).json({
        error:error.message
})
}
}

//edit_booking
module.exports= {userSignUp, userLogin,userBookSeat}