const mongoose = require('mongoose');
const db = require('../Config/db');

const { Schema } = mongoose;

const IdcodeSchema = new Schema({
    idname:{
        type: String,
        required: true
    },
    idcode:{
        type: String,
        required : true
    },
    codes:{
        type: Number,
        required : true
    },
});

const IdcodeModel = db.model('idcodes',IdcodeSchema);

module.exports = IdcodeModel;