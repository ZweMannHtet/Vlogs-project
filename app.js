const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
// const mongodb = require('mongodb');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');


// express app  
const app = express();

const dbURI = 'mongodb+srv://zozi:r51lbPQA5FGKzVV3@cluster0.fes33yn.mongodb.net/zozipms?retryWrites=true&w=majority' ;

mongoose.connect(dbURI,{ useNewUrlParser :  true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))
 .catch(err => {
    console.log('Database not connected' + err)
 });

// register view engine
app.set('view engine', 'ejs');

// listen for request


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.redirect('/blogs');
});


app.get('/about', (req,res) => {
    // res.send('<p>About Page</p>');
    res.render('about', { title: 'About' }); 
});

app.use('/blogs', blogRoutes);


//404 page
app.use((req,res) => {
    res.status(404).render('404', { title: '404' });
});
