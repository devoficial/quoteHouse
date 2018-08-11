const express = require('express');
const router = express.Router();

let helpers = require("../helpers/quote");
    


router.route("/")
.get(helpers.getQuote)

router.route("/newquote")
.get(helpers.createQuote)
.post(helpers.postQuote)


router.route("/edit/:id")
.get(helpers.show)
.post(helpers.updateQuote)



module.exports = router;
