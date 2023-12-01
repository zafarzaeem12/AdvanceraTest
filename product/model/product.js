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
        max:10
    },
    activeFlag: {
        type: Boolean,
        default:true
    },
    category:{
        type:String
    },
    sold:{
        type : Number,
        default : 0
    },
    soldDetails:[{
        Order_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Order'
        }
    }]
    
},
    { timestamps: true }
)
module.exports = mongoose.model("Product", ProductSchema);