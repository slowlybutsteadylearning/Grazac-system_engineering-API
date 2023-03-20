const User = require("../model/user.model")
const Booking = require("../model/booking.model")
const Reservation = require("../model/reservations.schema")

//All registered users
const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find();
        return res.status(200).json({
            message: users
        });
        
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
    }
//uploading of new obeservation for commuter to book
const uploadReservation = async(req, res) =>{
const {service_name, service_type} = req.body
    try {
        if(!service_name && service_type){
            return res.status(403).json({
                message:"All input are required"
            })
        };
        const reservationExist = await Reservation.findOne({service_name})
        if (reservationExist) 
            return res.status(409).json({
            message:"Reservation exist"
        });
        const newReservation = await Reservation.create({
            service_name,
            service_type
        });

        return res.status(201).json({message:"New reservation successfully uploaded",newReservation})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
    })
    }
}

// all booking
const allBooking = async (req,res)=>{
    try {
        const bookings = await Booking.find();
        return res.status(201).json({
            message: bookings
        });
    } catch (error) {
        return res.status(500).json({
            error:error.message
    })
}
}
module.exports = {getAllUsers,uploadReservation, allBooking}