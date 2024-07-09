const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SaveSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    dis_name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

const SaveModel = db.model('Save', SaveSchema);
module.exports = SaveModel;
