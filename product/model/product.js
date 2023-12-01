const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number
    },
    activeFlag: {
        type: Boolean
    },
    category:{
        type:String
    }
    
},
    { timestamps: true }
)
module.exports = mongoose.model("Product", ProductSchema);