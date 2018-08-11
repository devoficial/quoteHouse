const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const expressSanitizer = require("express-sanitizer");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let apiRoutes = require("./routes/api")
let quoteRoutes = require("./routes/quote")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSanitizer());

app.use('/',quoteRoutes);
app.use('/api/quotes',apiRoutes);


app.listen(port,() => {
  console.log(`The app is listening on port ${port}`)
})
