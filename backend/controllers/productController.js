import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc Fetch all products
// @route GET / api/products
// @access Public
const getProducts = asyncHandler(async(req,res) => {
 const products = await Product.find({},{ name: 1, image: 1, description: 1, brand: 1, category: 1, price: 1, countInStock: 1, rating: 1, numReviews: 1 })

 res.json(products)
})


const getProductById = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){res.json(product)}
    else{
        res.status(404).json({message: 'Product not found'})
    }
   })

   export {
    getProducts,
    getProductById
   }