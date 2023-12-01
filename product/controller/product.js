const Product = require('../model/product')

// for creatting product
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
module.exports={
    createnewProduct,
    updateProducts
}