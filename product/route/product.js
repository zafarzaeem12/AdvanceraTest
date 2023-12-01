const router = require('express').Router();
const { 
    createnewProduct,
    updateProducts,
    createOrder,
    getmostsoldedProducts,
 
} = require('../controller/product')


router.post('/create'  , createnewProduct);
router.put('/update/:id', updateProducts);
router.post('/order'  , createOrder);
router.get('/get' , getmostsoldedProducts);





module.exports = router