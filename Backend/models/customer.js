 const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerschema = new Schema({
    customer_name :{
        type: String
    },
    customer_email:{
        type: String
    },
    customer_password:{
        type: String
    },
    customer_is_deleted:{
        type:Boolean,
        default:false
    },
    customer_status:{
        type:Boolean,
        default:true
    },
    role:{
        type: String,
        default:"customer",
        "enm": ["admin","customer"]
    },
    token:{
        type:String,
        default: ""
    }
}, {timestamps:true})

const Customer = mongoose.model('Customer', customerschema)
module.exports = Customer