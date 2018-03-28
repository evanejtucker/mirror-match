const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('./app/public'));

app.get('/', (req, res, next)=> {
    res.render('pages/index');
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}!`);
})