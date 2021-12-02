const service = require('./productService');   
const resHndlr = require('../../handlers/responseHandler');
const constant = require('../../utils/constant');
const productConstant = require('./productConstant')

let addproduct = (req) => {
    return service.addproduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.AddProductSuccess, data)
        }
    }, (error) => {
        console.log('addCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.AddProductError, error);
    })
}

let updateproduct = (req) => {
    return service.updateproduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.updateProduct, data)
        }
    }, (error) => {
        console.log('updateCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.updateProductError, error);
    })
}

let getproduct = (req) => {
    return service.getproduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.ShowProduct, data)
        }
    }, (error) => {
        console.log('GetCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.getError, error);
    })
}

let getone = (req) => {
    return service.getone(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.ShowProduct, data)
        }
    }, (error) => {
        console.log('getCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.getError, error);
    })
}

let deleteproduct = (req) => {
    return service.deleteproduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.deleteProductSuccess, data)
        }
    }, (error) => {
        console.log('getCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.deleteProductError, error);
    })
}

module.exports = {
    addproduct,getproduct, getone, updateproduct, deleteproduct
}