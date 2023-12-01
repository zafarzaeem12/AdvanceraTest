const router = require('express').Router();

const { 
    createCustomer,
    updateCustomer
   
} = require('../controller/customer')


router.post('/create'  , createCustomer);
router.put('/update/:id' , updateCustomer);




module.exports = router