let db = require("../models");



exports.getQuote = (req,res) => {
    db.Quote.find()
    .then( data =>  res.status(201).json(data))
    .catch(err => res.send(err))
}

exports.createQuote = (req,res) => {
    db.Quote.create(req.body)
    .then(newQuote => res.json(newQuote))
    .catch(err => res.send(err))
}

exports.getSingleQuote = (req,res) => {
    db.Quote.findById(req.params.quoteId)
    .then(data => res.json(data))
    .catch(err => res.send(err))
}
exports.updateQuote = (req,res) => {
    db.Quote.findOneAndUpdate({_id:req.params.quoteId},req.body,{new:true})
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

exports.deleteQuote = (req,res) => {
    db.Quote.remove({_id:req.params.quoteId})
    .then(() =>  res.json({message:"That was deleted."}))
    .catch(err => res.send(err))
}



module.exports = exports;