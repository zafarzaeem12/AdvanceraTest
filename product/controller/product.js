const Product = require('../model/product')
const Order = require('../model/order')
// for creating product
const createnewProduct = async (req,res,next) => {
try{
    const {name , price , stock , activeFlag,category} = req.body;
    const check_product = await Product.findOne({ name: name });
   
    if(!name){
        return res.status(404).json({message : "Product Name is required" , status :0})
    }else if(!price){
        return res.status(404).json({message : "Product price is required" , status :0})
    }else if(!stock){
        return res.status(404).json({message : "Product stock is required" , status :0})
    }else if(!category){
        return res.status(404).json({message : "category is required" , status :0})
    }else if(check_product && check_product.name === name){
        return res.status(200).json({message : "this Product already exist" , status:0})
    }
    
    const Data = {
        name , price , stock , activeFlag,category
    }
    const newProduct = await Product.create(Data);
     res.status(201).json({
    message : "Product created successfully",
    status:1,
    data : newProduct
    })
    

}catch(err){
    console.log(err)
    res.status(500).json({ message : "No Product created",status:0})
}
}

// for updating product
const updateProducts =async (req,res,next) => {
    const id  = req.params.id
try{
    const {name , price , stock , activeFlag,category} = req.body;

      const updatePro =  await Product.findByIdAndUpdate(
        {_id : id},
        {$set:{name , price , stock , activeFlag,category}},
        {new : true});

        res.status(200).send({ 
            message : "Product updated successfully" , 
            status:1,
            data:updatePro
        })
}catch(err){
    res.status(500).send({ message : "no Product updated" , status:0})
}
}
// for creating orders
const createOrder = async (req,res,next) => {
    try{
        const { Customer_id , Product_id} = req.body

        const data = {
            Customer_id , Product_id
        }
        const newOrder  = await Order.create(data);

        const proDetails = await Product.findById(Product_id);

        await Product.updateOne(
            {_id : proDetails._id},
            {$set: { 
                stock : proDetails.stock - 1,
                sold : proDetails.sold + 1
            },
            $push:{soldDetails : newOrder._id}},
            {new : true})

            res.status(201).json({ message : "Order created successfully",status:1})
        
    }catch(err){
        res.status(500).json({ message : "no Order",status:0})
    }
}
// for getting most sold products
const getmostsoldedProducts = async (req,res,next) => {
try{
    const data =[
        {
          $group: {
            _id: null,
            maxSold: { $max: '$sold' },
          },
        },
      ]
    const maxSoldResult = await Product.aggregate(data);
      const maxSold = maxSoldResult.length > 0 ? maxSoldResult[0].maxSold : 0;
      
      const mostProducst = await Product.find({ sold:maxSold  });
      const totals = await Product.countDocuments()
  res.status(200).json({
    totalProducts : totals,
    total : mostProducst.length,
    message : "Most Solded Products fetched",
    status:1,
    data : mostProducst
})
}catch(err){
    res.status(500).json({
        message : "no Products fetched",
        status:0
    })
}
}
module.exports={
    createnewProduct,
    updateProducts,
    createOrder,
    getmostsoldedProducts
}