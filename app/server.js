const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('req-flash');
const exphbs = require('express-handlebars');
//const fs = require('fs');


const app = express();
const PORT = process.env.PORT || 3000 ;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'test'}));
app.use(flash());



//routes
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/', function (req, res) { 
    res.render('././layouts/main');
});

app.get('/login', (req, res) => {
    res.render('login', { message: req.flash('error')});
});

app.get('/signup', (req, res) => {
    res.render('signup', {message: req.flash('error')});
});

//
app.post


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));