
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.mongoDBURL || 'your-mongodb-connection-string-here';
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

module.exports = { PORT, mongoDBURL, BASE_URL };