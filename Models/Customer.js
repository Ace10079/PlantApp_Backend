const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const CustomerSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
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
    password: {
        type: String,
    },
}, { timestamps: true });


    CustomerSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

const UserModel = db.model('customer',CustomerSchema);
module.exports = UserModel;
