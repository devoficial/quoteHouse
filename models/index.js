const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost:37017/bloghub",() => {
    console.log("connected to mongodb successfully");
});

mongoose.Promise = Promise;
module.exports.Quote = require("./quote");