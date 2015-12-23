var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './app/views')
app.set('view engine', 'jade');

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

app.post('/confirmation', function(req, res) {
    res.location('/confirmation');

    res.render('confirmation', {
        order: {
            number : req.body.number,
            buyer : {
                first_name: req.body.buyer.first_name,
                last_name: req.body.buyer.last_name,
            },
            name : req.body.number,
            total : '$' + (req.body.total / 100),
            subtotal : '$' + (req.body.linetotal / 100),
            discount : '- $' + (req.body.discount / 100),
            taxes : '$' + (req.body.taxes / 100),
            shipping : '$' + (req.body.shipping / 100),
            shipping_address : {
                first_name: req.body.shipping_address.first_name,
                last_name: req.body.shipping_address.last_name,
                company: req.body.shipping_address.company,
                line1: req.body.shipping_address.line1,
                line2: req.body.shipping_address.line2,
                city: req.body.shipping_address.city,
                country: req.body.shipping_address.country,
                zip: req.body.shipping_address.zip,
                state: req.body.shipping_address.state.toUpperCase(),
                phone: req.body.shipping_address.phone,
            },
            billing_address : {
                first_name: req.body.billing_address.first_name,
                last_name: req.body.billing_address.last_name,
                company: req.body.billing_address.company,
                line1: req.body.billing_address.line1,
                line2: req.body.billing_address.line2,
                city: req.body.billing_address.city,
                country: req.body.billing_address.country,
                zip: req.body.billing_address.zip,
                state: req.body.billing_address.state.toUpperCase(),
                phone: req.body.billing_address.phone,
            },
        }
    });
});

// app.get('/confirmation', function(req, res) {
//     res.render('confirmation');
// });

///
// Backwards compatibility with the old website
///
// app.get('/order', function(req, res) {
//     res.redirect('/');
// });

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
