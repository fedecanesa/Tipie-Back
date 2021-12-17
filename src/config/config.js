require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 4000,
    email: process.env.VALID_EMAIL,
    password: process.env.VALID_PASSWORD
}