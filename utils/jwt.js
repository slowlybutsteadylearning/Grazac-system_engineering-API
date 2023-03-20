const jwt = require("jsonwebtoken");

const createJWT = ({ role,id, email, first_name }) => {
  return jwt.sign({ role, id, email, first_name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};




module.exports = createJWT;