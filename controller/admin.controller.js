const User = require("../model/user.model")
const Booking = require("../model/booking.model")
const Reservation = require("../model/reservation.model")

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
        }
        const newReservation = await Reservation.create({
            service_name,service_type
        });

        return res.status(201).json({message:"New reservation successfully uploaded",newReservation})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
    })
    }
}


module.exports = {getAllUsers,uploadReservation}