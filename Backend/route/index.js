const CustomerRoute = require('../Modules/Customer/customerRoute')
const productRoute = require('../Modules/Product/productRoute')

module.exports = (app) => {

    // employee route 
    app.use('/shop/customer', [CustomerRoute])
    app.use('/shop/product', [productRoute])
    // app.use('/shop/login', [CustomerRoute])
    app.use('/shop', [CustomerRoute])
}
