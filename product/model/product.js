const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
        min:1,
        max:100
    },
    activeFlag: {
        type: Boolean,
        default:true
    },
    category:{
        type:String
    }
    
},
    { timestamps: true }
)
module.exports = mongoose.model("Product", ProductSchema);