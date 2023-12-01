const router = require('express').Router();

const { 
    createCustomer,
    getallCustomer,
    getCustomerDetails,
    updateCustomer,
    deleteCustomer
} = require('../controller/customer')


router.post('/create'  , createCustomer);
router.put('/update/:id' , updateCustomer);
// router.get('/get' , getallCustomer);
// router.get('/get/:id' , getCustomerDetails);
// router.delete('/delete/:id' , deleteCustomer);




module.exports = router