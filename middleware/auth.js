const jwt = require("jsonwebtoken");
require("dotenv").config()

const isAuthenticated = async (req, res, next) =>{
    try {
        const token = req.headers.authorization.split("")[1]
        if(!token) return res.status(403).json({ message:"Unauthorized"})
        
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) return res.status(401).json({ message:"Invalid token"})
        
        req.user = decoded
        next();
    } catch (error) {return res.status(500).json({error:error.message})
    }
};


const authorization = (roles) => {
    return function (req, res, next) {
      if (roles.includes(req.user.role="admin")) {
        next();
      } else {
        return res.status(401).json({ message: "Permission Denied - You are not an admin" });
      }
        console.log(req.user);
        console.log(roles);
    };
  };

  module.exports={isAuthenticated, authorization}