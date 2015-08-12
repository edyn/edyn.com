var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.get('/', function(req, res) {
    res.sendfile('./dist/index.html');
});

app.get('/about', function(req, res) {
    res.sendfile('./dist/about.html');
});

app.get('/privacy', function(req, res) {
    res.sendfile('./dist/privacy.html');
});

app.get('/getstarted', function(req, res) {
    res.sendfile('./dist/getstarted.html');
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
///
// End of backwards compatibility section
///


app.listen(process.env.PORT || 5000);
