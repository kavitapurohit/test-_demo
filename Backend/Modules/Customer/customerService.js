const CustomerModel = require('../../models/customer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const mailer = require('../../middleware/mailer')
const nodemailer = require("nodemailer")


//status Active & Deactive
const customerStatus = (req) => {

    let query = {
        customer_is_deleted: false,
        _id: req.params.id
    }
    return CustomerModel.find(query).then((result) => {
        
        if (result) {
        
            let CustomerID = req.params.id

                let updateData = {
                    customer_status: req.body.customer_status,
                }

                return CustomerModel.findByIdAndUpdate(CustomerID, { $set: updateData })
                    .then((result) => {
                        return result
                    })
        }
        else {
            return 1
        }
    })
}

//show customer details list
const getcustomer = (req) => {

    let query = {
        customer_is_deleted: false
    }
    return CustomerModel.find(query).then((result) => {
        if (result) {
            return { Customer: result }
        }
        else {
            return 1
        }
    })
}

//show single Customer detail
const getone = (req) => {

    let query = {
        customer_is_deleted: false,
        _id: req.params.id
    }

    return CustomerModel.findById(query).then((result) => {
        if (result) {
            return { Customer: result }
        }
        else {
            return 1
        }
    })
}

//store new customer
let addCustomer = (req) => {

    let query = {
        customer_is_deleted: false,
        customer_email: req.body.customer_email.toLowerCase()
    }

    return CustomerModel.findOne(query).then((result) => {
        if (result) {
            //email exist
            return 1
        } else {
            bcrypt.hash(req.body.customer_password, 10, (err, hashpass) => {
                if (err) {
                    return { Error: err }
                }
                let customer = new CustomerModel({
                    customer_name: req.body.customer_name,
                    customer_email: req.body.customer_email.toLowerCase(),
                    customer_password: hashpass,
                })
                return customer.save().then((result) => {

                    if (result) {

                        var transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            port: 587,
                            secure: false,
                            requireTLS: true,
                            auth: {
                                user: "jay.fatania@webcluesinfotech.com",
                                pass: "uV<6GATa"
                            }
                        })
                        var info = {
                            from: "jay.fatania@webcluesinfotech.com",
                            to: "",
                            subject: "Registration Sucessfull",
                            text: "Hello, You are Registration Successfull in CRUD-APP, Now you can Login into your Account. Thank You...!"
                        },
                            mail = transporter.sendMail(info)
                        if (mail) {
                            return result
                        }
                        else {
                            console.log("Error in sending mail..!")
                        }
                    }
                })
            })
        }
    })
}



//update customer 
const updateCustomer = (req) => {

    let query = {
        customer_is_deleted: false,
        _id: req.params.id
    }

    return CustomerModel.findById(query).then((result) => {
        if (result) {
            bcrypt.hash(req.body.customer_password, 10, (err, hashpass) => {
                if (err) {
                    return { error: err }
                }
                let CustomerID = req.params.id

                let updateData = {
                    customer_name: req.body.customer_name,
                    customer_email: req.body.customer_email,
                    customer_password: hashpass,
                }

                return CustomerModel.findByIdAndUpdate(CustomerID, { $set: updateData })
                    .then((result) => {
                        return result
                    })
            })
        } else {
            return 1;
        }
    })
}
//delete customer
const deleteCustomer = (req) => {

    let query = {
        customer_is_deleted: false,
        _id: req.params.id
    }
    return CustomerModel.findByIdAndRemove(query)
        .then((result) => {
            if (result) {
                return result
            }
            else {
                return 1
            }
        })
}

const login = async (req, res) => {
    var email = req.body.username;
    var password = req.body.password;

    let getCustomer = await CustomerModel.findOne({ customer_email: email })
    if (!getCustomer) {
        return 1;
    }
    else {
        if (getCustomer.customer_status === true) {

            //console.log("else")
            const checkPassword = await bcrypt.compare(password, getCustomer.customer_password)
            //console.log("checkPassword",checkPassword)
            if (checkPassword) {
                try {
                    let token = ""
                    token = await jwt.sign({ getCustomer }, 'ScreTEs', { expiresIn: '1h' });
                    getCustomer.token = token
                    return { getCustomer };
                } catch (error) {
                    console.log(error);
                }
            } else {
                return 2;
            }
        }
        else {
            return 3;
        }
    }
}

let adminReg = (req) => {

    let query = {
        customer_is_deleted: false,
        customer_email: "admin@gmail.com"
    }

    return CustomerModel.findOne(query).then((result) => {
        if (result) {
            //email exist
            return 1
        } else {
            bcrypt.hash("admin@123", 10, (err, hashpass) => {
                if (err) {
                    return { Error: err }
                }
                let customer = new CustomerModel({
                    customer_name: "Admin",
                    customer_email: "admin@gmail.com",
                    customer_role: "admin",
                    customer_password: hashpass,
                })
                return customer.save().then((result) => {
                    return result
                })
            })
        }
    })
}
module.exports = {
    getcustomer, getone, addCustomer, updateCustomer, deleteCustomer, login, adminReg, customerStatus
}