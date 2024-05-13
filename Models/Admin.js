const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const AdminSchema = new Schema({
    admin_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
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
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });

const AdminModel = db.model('Admin',AdminSchema);
module.exports = AdminModel;
