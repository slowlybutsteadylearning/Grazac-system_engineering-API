// const jwt = require("jsonwebtoken");
// require("dotenv").config()

// require dependencies 
const jwt = require("jsonwebtoken");
require("dotenv").config();

//  authenticating  admin
exports.authenticate = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
  
      if (!token) return res.status(401).json({ message: "Authentication failed" });
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decoded) return res.status(401).json({ message: "Authentication failed" });
  
     
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };

exports.authorization = (roles) => {
  return function (req, res, next) {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      return res.status(401).json({ message: "Permission Denied - You are not an admin" });
    }
      console.log(req.user);
      console.log(roles);
  };
};

  // module.exports={authenticate, authorization}