'use strict';

const Joi = require('joi');
const regEx = require('../../utils/regularExpression')
const resHndlr = require('../../handlers/responseHandler');
const customerConstant = require('./customerConstant')
const jwt = require('jsonwebtoken')


let addEmployee = async (req, res, next) => {
    try {
        let schema = Joi.object({
            customer_name: Joi.string().required(),
            customer_email: Joi.string().required().pattern(regEx.emailRegEx)
                .messages({ 'string.pattern.base': customerConstant.VALIDATION.invalidEmail }),
            customer_password: Joi.string().min(5).max(10).required()
        })

        await schema.validateAsync(req.body, { allowUnknown: true });
        next();

    } catch (error) {
        resHndlr.validationErrorHandler(res, error);
    }
}

let checktoken = (req, res, next) => {
    try{
        const token = req.headers["authorization"]
        const decode = jwt.verify(token, 'ScreTEs')
        // const role = req.headers["role"]
        
        req.customer = decode 
        // console.log(role)

        // if(role == "customer"){
        //     next()
        // }else{
        //     res.json("You are not authorized to access this!")
        // }
        next()
     
    }
    catch(error){
        resHndlr.checktokenerror(res, error);
    }
}


module.exports = {
    addEmployee, checktoken
}