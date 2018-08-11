let db = require("../models");




exports.getQuote = (req,res) => {
    db.Quote.find()
    .then( data =>{
        res.render("index",{
        title:"Quote Machine",
        data:data
    })})
    .catch(err => res.send(err))
    
}

exports.createQuote = (req,res) => {
    res.render("newquote",{title:"QuoteMachine"})
}

exports.postQuote = (req,res) => {
    req.body.quote.body = req.sanitize(req.body.quote.body);
    db.Quote.create(req.body.quote)
    .then(() => {
        res.redirect("/");
    })
    .catch( err => {
        console.log(err);
    })
}

exports.show = (req, res)  => {
    console.log(req.params.id);
    db.Quote.findById(req.params.id)
    .then( showQuote => {
        res.render("edit", { quote: showQuote });
    })
    .catch( err => {
        console.log(err);
        res.redirect("/");
    })
}

exports.updateQuote = (req,res) => {
    let quotes = {};
    quotes.name = req.body.quote.name;
    quotes.img = req.body.quote.img;
    quotes.quote = req.body.quote.quote;

    let query = {_id:req.params.id}
    db.Quote.update(query,quotes,{new:true})
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));

}





module.exports = exports;