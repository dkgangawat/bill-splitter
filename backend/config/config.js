require("dotenv").config();

const config = {
    PORT: process.env.PORT || 8000,
    MONGO_URI: process.env.MONGO_URI,
    SECRET: process.env.SECRET,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
}

module.exports = config;