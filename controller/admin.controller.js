const User = require("../model/user.model")
const Booking = require("../model/booking.model")
const Train = require("../model/trainservice.schema")

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
//uploading of new reservation for commuter to book
const uploadTrainService = async(req, res) =>{
const {service_name, service_type, train_status} = req.body
    try {
        if(!service_name && service_type){
            return res.status(403).json({
                message:"All input are required"
            })
        };
        const trainSeviceExist = await Train.findOne({service_name})
        if (reservationExist) 
            return res.status(409).json({
            message:"Train exist"
        });
        const newTrainService = await Train.create({
            service_name,
            service_type,
            train_status

        });

        return res.status(201).json({message:"New Train service successfully uploaded",newTrainService})
        
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
module.exports = {getAllUsers,uploadTrainService, allBooking}