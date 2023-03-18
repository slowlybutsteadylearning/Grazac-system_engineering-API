const mongoose = require ("mongoose");
 
const connDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI_DEV)
        console.log("Connected to Db")
    } catch (error) {
        console.log("Not connected to DB")
    }
};

module.exports = connDb