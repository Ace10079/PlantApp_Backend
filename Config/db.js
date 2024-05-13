const mongoose = require('mongoose');
require('dotenv').config();
const connection = mongoose.createConnection(process.env.MONGODB_URI);

connection.on('open', () => {
    console.log("MongoDB Connected");
}).on('error', (error) => {
    console.log("MongoDB Connection error:", error);
});

module.exports = connection;
