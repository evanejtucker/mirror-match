const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const ejs = require('ejs');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('tiny'));
 

app.get('/', (req, res, next)=> {
    res.render('pages/index');
});

mongoose.connect('mongodb://127.0.0.1:27017/mirror-match', (err)=> {
    if(err) {
        console.log(err);
    } else {
        console.log('mongoose connection successful');
    }
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}!`);
})