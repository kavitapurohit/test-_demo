const service = require('./customerService');
const resHndlr = require('../../handlers/responseHandler');
const constant = require('../../utils/constant');
const customerConstant = require('./customerConstant')

let adminReg = (req) => {
    return service.adminReg(req).then((data) => {
        if (data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('admin Register Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.addError, error);
    })
}

let customerStatus = (req) => {
    return service.customerStatus(req).then((data)=>{
        if((data && data === 1)){
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.customernotFound, data)
        }else{
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.statusChanged, data)
        }
    })
}

let login = (req) => {
    return service.login(req).then((data) => {
        if ((data && data === 1)) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.customernotFound, data)
        } else if (data === 2) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.passwordWrong, data)
        } else if (data === 3) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.notActivated)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.login, data)
        }
    }, (error) => {
        console.log('Login Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.loginError, error);
    })
}

let addcustomer = (req) => {
    return service.addCustomer(req).then((data) => {
        if (data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('addEmployee Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.addError, error);
    })
}

let updatecustomer = (req) => {
    return service.updateCustomer(req).then((data) => {
        if (data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.customernotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.updateSuccess, data)
        }
    }, (error) => {
        console.log('addEmployee Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.updateError, error);
    })
}

let getcustomer = (req) => {
    return service.getcustomer(req).then((data) => {
        if (data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.customernotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        console.log('getEmployees Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.getError, error);
    })
}

let getone = (req) => {
    return service.getone(req).then((data) => {
        if (data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.customernotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.getSuccess, data)
        }
    }, (error) => {
        console.log('getEmployees Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.getError, error);
    })
}

let deleteCustomer = (req) => {
    return service.deleteCustomer(req).then((data) => {
        if (data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.customernotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.deletecustomer, data)
        }
    }, (error) => {
        console.log('getEmployees Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.deletecustomerError, error);
    })
}
module.exports = {
    getcustomer,
    addcustomer,
    getone,
    updatecustomer,
    deleteCustomer,
    login,
    adminReg,
    customerStatus
}