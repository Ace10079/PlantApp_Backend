const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const DiseaseSchema = new Schema({
    dis_id: {
        type: String,
        required: true
    },
    disname: {
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
}, { timestamps: true });

const DiseaseModel = db.model('Disease',DiseaseSchema);
module.exports = DiseaseModel;
