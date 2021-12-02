const ProductModel = require('../../models/product')
const msg = require('./productConstant')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constant = require('../../utils/constant')

//store new customer
let addproduct = (req) => {

    let query = {
        product_is_deleted: false,
        product_name: req.body.product_name,
        product_size: req.body.product_size,
    }

    return ProductModel.findOne(query).then((result) => {
        if (result) {
            //product exist
            return 1
        } else {
            let product = new ProductModel({
                product_name: req.body.product_name,
                product_size: req.body.product_size,
                product_price: req.body.product_price
            })
            return product.save().then((result) => {
                if(result){
                    return result
                }
                else{
                    return 2
                }
            })
        }
    })
}

//store new customer
let updateproduct = (req) => {

    let query = {
        product_is_deleted: false,
        _id: req.params.id
    }

    return ProductModel.findById(query).then((result) => {
        if(result){
                let ProductID = req.params.id
        
                let updateData = {
                    product_name: req.body.product_name,
                    product_size: req.body.product_size,
                    product_price: req.body.product_price,
                }
        
                return ProductModel.findByIdAndUpdate(ProductID, { $set: updateData })
                    .then( () => {
                        return updateData
                    })
        } else{
                return 1;
            }
        })
}

//show customer details list
let getproduct = (req) =>{
    let query = {
        product_is_deleted: false
    }
    return ProductModel.find(query).then((result)=>{
        if(result){
            return {product: result}
        }
        else{
            return 1
        }
    })

}

const getone = (req) => {

    let query = {
        product_is_deleted: false,
        _id: req.params.id
    }
    
    return ProductModel.findById(query).then((result) => {
        if(result){
            return {product: result}
        }
        else{
            return 1
        }
    })
}

const deleteproduct = (req) => {

    let query = {
        product_is_deleted: false,
        _id: req.params.id
    }
    
    return ProductModel.findByIdAndRemove(query).then((result) => {
        if(result){
            return result
        }
        else{
            return 1
        }
    })
}

module.exports = {
    addproduct, getproduct, getone, updateproduct, deleteproduct
}