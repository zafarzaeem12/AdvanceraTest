const router = require('express').Router();

const { 
    createCustomer,
    updateCustomer,
    allCustomer,
    oneCustomer
} = require('../controller/customer')


router.post('/create'  , createCustomer);
router.put('/update/:id' , updateCustomer);
router.get('/get',allCustomer);
router.get('/get/:id',oneCustomer);


module.exports = router