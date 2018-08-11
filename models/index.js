const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost:37017/bloghub")
mongoose.Promise = Promise;
module.exports.Quote = require("./quote");