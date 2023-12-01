const router = require('express').Router();
const { 
    createnewProduct,
    updateProducts,
    createOrder,
    getmostsoldedProducts,
    getallCustomer,
    getCustomerDetails,
    deleteCustomer
} = require('../controller/product')


router.post('/create'  , createnewProduct);
router.put('/update/:id', updateProducts);
router.post('/order'  , createOrder);
router.get('/get' , getmostsoldedProducts);
// router.get('/get/:id' , getCustomerDetails);
// router.delete('/delete/:id' , deleteCustomer);




module.exports = router