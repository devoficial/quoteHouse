const express = require('express');
const router = express.Router();

let helpers = require("../helpers/index");
    


router.route("/")
.get(helpers.getQuote)
.post(helpers.createQuote)


router.route("/:quoteId")
.get(helpers.getSingleQuote)
.put(helpers.updateQuote)
.delete(helpers.deleteQuote)



module.exports = router;
