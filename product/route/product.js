const router = require('express').Router();
const { 
    createnewProduct,
    updateProducts,
    createOrder,
    getmostsoldedProducts,
    CustomerBuyMost
 
} = require('../controller/product')


router.post('/create'  , createnewProduct);
router.put('/update/:id', updateProducts);
router.post('/order'  , createOrder);
router.get('/get' , getmostsoldedProducts);
router.get('/most-customers', CustomerBuyMost)




module.exports = router