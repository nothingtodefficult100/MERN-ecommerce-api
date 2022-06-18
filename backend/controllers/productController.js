const Product = require('../models/productModel');

exports.getAllProducts = async (req, res, next) => {
    try {

        const products = await Product.find();
        res.status(200).json({
            success: true,
            products
        })

    } catch (e) {
        console.log(e);
    }
}


//=================created product======= admin=======
exports.createProduct = async (req, res, next) => {
    try {
        const createdProduct = await Product.create(req.body);

        res.status(201).json({
            success: true,
            createdProduct
        })
    } catch (e) {
        console.log(e);
    }
}


//===============updated prudct=========== admin =======
exports.updateProduct = async (req, res, next) => {
    try {

        let product = await Product.findById(req.params.id);

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })


        res.status(200).json({
            success: true,
            product
        })


    } catch (e) {
        console.log(e);
    }
}


//===========delete product============ admin========

exports.deleteProduct = async (req,res, next) => {
    try {

        const deletedProduct = await Product.findById(req.params.id);
        deletedProduct.remove();
        res.status(200).json({
            success: true,
            deletedProduct
        })

    } catch (e) {
        console.log(e);
    }
}


//===========get single product =========

exports.getSingleProduct = async(req,res,next)=>{
    try{
         
        const gsp = await Product.findById(req.params.id);
        res.status(200).json({
            success:true,
            gsp
        })

    }catch(e){
        console.log(e);
    }
}


