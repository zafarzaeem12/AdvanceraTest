const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    cardNumber: {
        type: String,
    },
    phoneNumber: {
        type: String
    },
    
},
    { timestamps: true }
)
module.exports = mongoose.model("Customer", CustomerSchema);