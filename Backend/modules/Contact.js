const mongoose = require('mongoose')
const {Schema} =mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    msg:{
        type:String
    },
    Date: {
        type: Date,
        default: Date.now,
    },
})
const User=mongoose.model('contact', UserSchema)
module.exports = User