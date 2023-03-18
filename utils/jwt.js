const jwt = require("jsonwebtoken");

const createJWT = ({ id, email, first_name }) => {
  return jwt.sign({ id, email, first_name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};




module.exports = createJWT;