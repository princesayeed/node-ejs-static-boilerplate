const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//view engine setup
app.use(expressLayouts);
app.set("view engine", 'ejs');

//set static folder
app.use(express.static(__dirname + ('/public')));

//routes
app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("App running at 5000"));