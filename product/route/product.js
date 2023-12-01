const router = require('express').Router();
const { 
    createnewProduct,
    updateProducts,
    getallCustomer,
    getCustomerDetails,
    deleteCustomer
} = require('../controller/product')


router.post('/create'  , createnewProduct);
router.put('/update/:id', updateProducts);
// router.get('/get' , getallCustomer);
// router.get('/get/:id' , getCustomerDetails);
// router.delete('/delete/:id' , deleteCustomer);




module.exports = router