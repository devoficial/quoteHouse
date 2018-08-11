const mongoose = require("mongoose");


// Defining Schema
const quoteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:"Name cannot be blank"
    },
    quote:{
        type:String,
        required:"This area cannot be blank"
    },
    img:{
        type:String,
        required:true
    }, 
    createdDate:{
        type:Date,
        default:Date.now
    }

});

const Quote = mongoose.model("Quote",quoteSchema);

module.exports = Quote;
