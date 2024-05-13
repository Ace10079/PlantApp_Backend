const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb+srv://karan:karan@cluster0.xi3owp9.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster0`);

connection.on('open', () => {
    console.log("MongoDB Connected");
}).on('error', (error) => {
    console.log("MongoDB Connection error:", error);
});

module.exports = connection;
