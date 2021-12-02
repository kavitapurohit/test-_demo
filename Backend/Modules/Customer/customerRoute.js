const router = require('express').Router();
const facade = require('./CustomerFacade');
const validator = require('./customerValidator');
const resHndlr = require('../../handlers/responseHandler');
// const mailer = require("../../middleware/mailer")


// router.route('/send').get((req, res) => {
//     res.send("hello ")
//     return mailer.  
// })


//admin Register Route
router.route('/').post((req, res) => {
    facade.adminReg(req, res)
        .then((result) => {
            resHndlr.successHandler(res, result)
        }).catch((err) => {
            resHndlr.errorHandler(res, err)
        })
})

//activate & Diactivate user
router.route('/change_status/:id').get((req, res) => {
    facade.customerStatus(req, res)
        .then((result) => {
            resHndlr.successHandler(res, result)
        }).catch((err) => {
            resHndlr.errorHandler(res, err)
        })
})

// Login Route
router.route('/login').post((req, res) => {
    facade.login(req, res)
        .then((result) => {
            resHndlr.successHandler(res, result)
        }).catch((err) => {
            resHndlr.errorHandler(res, err)
        })
})

//add customer route
router.route('/add').post([validator.addEmployee], (req, res) => {

    facade.addcustomer(req, res)
        .then((result) => {
            resHndlr.successHandler(res, result)
        }).catch((err) => {
            resHndlr.errorHandler(res, err)
        })
})


//update customer route
router.route('/update/:id').put([validator.addEmployee], (req, res) => {
    facade.updatecustomer(req, res)
        .then((result) => {
            resHndlr.successHandler(res, result)
        }).catch((err) => {
            resHndlr.errorHandler(res, err)
        })
})


//get all customer route
router.route('/get').get((req, res) => {
    facade.getcustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

//get customer by ID route
router.route('/get/:id').get([], (req, res) => {
    facade.getone(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

//delete customer Route
router.route('/delete/:id').delete([], (req, res) => {
    facade.deleteCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

module.exports = router;