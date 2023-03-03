var express = require('express');
var router = express.Router();
const { userSignup, userLogin } = require('../controller/usercontroller')
const { addProduct, getProducts, getProductById } = require('../controller/productController')
const { addPaymentGateway, paytmResponse } = require('../controller/paymentController') 

router.post('/signup', userSignup)
router.post('/login', userLogin)
router.post('/addproduct', addProduct)
router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.post('/payment', addPaymentGateway)
router.post('/callback', paytmResponse)

module.exports = router;