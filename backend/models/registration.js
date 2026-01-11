const mongoose = require('mongoose')

const registration = mongoose.Schema({
    studentname: {
        type: String,
        required: true
    },
    studentemail: {
        type: String,
        required: true
    },
    eventid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventData',
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('registration', registration)