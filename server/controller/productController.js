const Product = require('../model/productSchema')

const addProduct = async (req, res) => {
    try {
        await Product.create(req.body)
        res.send('Product Added')
    } catch (error) {
        res.send(error)
    }
}

const getProducts = async (req, res) => {
    try {
        const result = await Product.find()
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findOne({'id':id})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { addProduct, getProducts, getProductById }