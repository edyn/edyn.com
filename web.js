var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendfile('./dist/index.html');
});

app.get('/about', function(req, res) {
    res.sendfile('./dist/about.html');
});

// app.get('/privacy', function(req, res) {
//     res.sendfile('./dist/privacy.html');
// });

app.get('/getstarted', function(req, res) {
    res.sendfile('./dist/getstarted.html');
});

app.get('/order', function(req, res) {
    res.sendfile('./dist/order.html');
});

app.post('/order', function(req, res) {
    res.render('/confirmation', {
        order: {
            name : req.body.number,
            total : req.body.total,
            subtotal : req.body.subtotal,
            taxes : req.body.taxes,
            shipping : req.body.shipping,
            shipping_address : req.body.shipping_address,
            billing_address : req.body.billing_address
        }
    });
});

app.get('/confirmation', function(req, res) {
    res.sendfile('./dist/confirmation.html');
});

///
// Backwards compatibility with the old website
///
app.get('/order', function(req, res) {
    res.redirect('/');
});

app.get('/faq', function(req, res) {
    res.redirect('https://edyn.zendesk.com/hc/en-us');
});

app.get('/company', function(req, res) {
    res.redirect('/about');
});

app.get('/support', function(req, res) {
    res.redirect('/getstarted');
});
///
// End of backwards compatibility section
///


app.listen(process.env.PORT || 5000);
