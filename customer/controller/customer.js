const Customer = require('../model/customer')

// for creatting customers
const createCustomer = async (req,res,next) => {
try{
    const {name , email , cardNumber , phoneNumber} = req.body
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const check_email = await Customer.findOne({ email: email });
   
    if(!name){
        return res.status(404).json({message : "Name is required" , status :0})
    }
    else if(!email){
        return res.status(404).json({message : "Email is required" , status :0})
    }
    else if (!email.match(emailValidation)) {
        return res.status(403).send({
          message: "Email is not valid",
          status: 0,
        });
    }
    else if(!cardNumber){
        return res.status(404).json({message : "Card Number is required" , status :0})
    }
    else if (cardNumber.length !== 16) {
        return res.status(400).json({
           message: "Not more than 16 digits or less than 16 digits",
           status: 0,
         });
       } 
    else if(!phoneNumber){
        return res.status(404).json({message : "Phone Number is required" , status :0})
    }
    else if (phoneNumber.length !== 11) {
       return res.status(400).send({
          message: "Not more than 11 digits",
          status: 0,
        });
      } 
      else if(check_email && check_email.email == email){
        return res.status(400).json({message : "Customer already exist" , status :0})
    }
    else{
        const Data = {
            name, 
            email,
            cardNumber, 
            phoneNumber
        }
       const newCustomer = await Customer.create(Data);
      return  res.status(201).json({
        message : "Customer created successfully",
        status:1,
        data : newCustomer
       })
    }

}catch(err){
    console.log(err)
    res.status(500).json({ message : "No Customer created",status:0})
}
}

// for updating customers

const updateCustomer =async (req,res,next) => {
    const id  = req.params.id
try{
    const {name , cardNumber,phoneNumber} = req.body;

      const updateCust =  await Customer.findByIdAndUpdate(
        {_id : id},
        {$set:{name ,cardNumber,phoneNumber }},
        {new : true});

        res.status(200).send({ message : "Customer updated successfully" , status:1,data:updateCust})
}catch(err){
    res.status(500).send({ message : "no Customer updated" , status:0})
}
}
module.exports={
    createCustomer,
    updateCustomer
}