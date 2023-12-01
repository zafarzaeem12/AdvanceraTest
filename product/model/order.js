const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Customer_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer'
    },
    Product_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }
    
},
    { timestamps: true }
)
module.exports = mongoose.model("Order", OrderSchema);