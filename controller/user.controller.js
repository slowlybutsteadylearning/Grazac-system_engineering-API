const User = require("../model/user.model");
const Booking = require("../model/booking.model")
const Reservation= require("../model/reservation.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createJWT = require("../utils/jwt")

//user sign up
exports.userSignUp = async (req, res) =>{
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
exports.userLogin = async(req,res)=>{
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

exports.userBookSeat = async (req,res) =>{
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

exports.editBookingSeat = async (req, res) => {
    const { id } = req.params;
    const {booking_time} = req.body;
    try {
        // check if the booking exists
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({
                message: "Not booked yet",
            });
        }
        const edit_time = await Booking.findByIdAndUpdate(id, {
            booking_time
        }, 
        { new: true }
        );
        return res.status(200).json({
            message: "Booking time updated successfully",
            news: edit_time,
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            error: error.message,
        });
    }
};

// delete booking
exports.deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        // check if the  exists
        const booking_exist = await News.findById(id);
        if (!booking_exist) {
            return res.status(404).json({
                message: "Booking does not exist",
            });
        }
        const del_booking = await Booking.deleteOne({ _id: id });
        return res.status(200).json({
            message: "Booking deleted successfully",
            news: del_booking,
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

//all reservation

exports.allReservation = async (req, res) =>{
    try {
        const users = await Reservation.find();
        return res.status(200).json({
            message: users
        })
        
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
    }

