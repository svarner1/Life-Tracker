// Importinf the jwt package and the SECRET_KEY from config.
const jwt = require("jsonwebtoken")
import { SECRET_KEY } from "../config"

// Create a function called generateToken that accepts a data parameter and returns a signed 
// token using the jsonwebtoken package and the SECRET_KEY.
const generateToken = (data) => jwt.sign(data, SECRET_KEY, { algorithm: "HS256", expiresIn: 1000})


// Below that define a createUserJwt function that accepts a user and creates a payload with 
// that user's email and admin status. It should return the result of calling the generateToken 
// method on that payload.
const createUserJWT = ({email, admin_status}) => {
    // validateFields({
    //     required:["email"],
    //     obj: CredentialsContainer,
    //     location: "token generation"
    // })
    const payload {
        email,
        admin_status
    }
    const token = generateToken(payload)
    console.log("token", token)
}

// Finally, create a validateToken function that accepts a function and runs a try...catch block.
// Try to verify the token with the jsonwebtoken package and the SECRET_KEY. If anything goes wrong
// ,return an empty object.
const validateToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY)
      } catch (err) {
        return {}
      }
}

// Export all functions.
module.exports = {
    generateToken,
    createUserJWT,
    validateToken,
}
  