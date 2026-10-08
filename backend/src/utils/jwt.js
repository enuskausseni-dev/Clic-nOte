const jwt = require("jsonwebtoken")

function generateToken(user) {
    return jwt.sign(
        {
            userId : user._id,
            role : user.role
        },
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )
}

module.exports = {
    generateToken
}