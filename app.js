var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var search=require('./controllers/searchController');




app.get('/',function (req,res) {
    res.json({});
})

app.use('/search',search);

app.listen(3000,function () {
    console.log('Search Api server running on port 3000...')
})
