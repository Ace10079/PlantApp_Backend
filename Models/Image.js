const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const ImageSchema = new Schema({
    Image_id: {
        type: String,
        required: true
    },
    user_id: {//user_id
        type: String,
        required: true
    },
    dis_id: {//dis_id
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    },
}, { timestamps: true });

const ImageModel = db.model('Image',ImageSchema);
module.exports = ImageModel;
