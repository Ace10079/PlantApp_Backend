const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const APISchema = new Schema({
    api_id: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const APIModel = db.model('API', APISchema);
module.exports = APIModel;
