const express = require('express');
const app = express();

// Serve static files in public directory
app.use(express.static('public'));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Access form data sent via POST request using req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// GET Request to '/' route
app.get('/', (req,res) => {
    res.render("index.ejs");
});

// GET Request to '/about-us' route
app.get('/about-us', (req,res) => {
    res.render("about-us.ejs");
});

// GET Request to '/licensing-programs' route
app.get('/licensing-programs', (req,res) => {
    res.render("licensing-programs.ejs");
});

// GET Request to '/choongsoo-park' route
app.get('/choongsoo-park', (req,res) => {
    res.render("choongsoo-park.ejs");
});

// GET Request to '/contact-us' route
app.get('/contact-us', (req,res) => {
    res.render("contact-us.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));