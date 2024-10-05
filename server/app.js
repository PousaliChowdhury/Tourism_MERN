require('dotenv').config();

const port = process.env.PORT || 8080;
const jwtSecret = process.env.JWT_SECRET;
const mongoConn = process.env.MONGO_CONN;

// Use these variables in your application
