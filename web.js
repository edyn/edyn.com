var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var Config = require('config');

function ensureSecure(req, res, next){
  if(req.headers["x-forwarded-proto"] === "https"){
    // OK, continue
    return next();
  }

  if(req.secure){
    // OK, continue
    return next();

  }
  res.redirect('https://' + req.hostname + req.url); // handle port numbers if you need non defaults
}


// Handle environments
if (process.env.NODE_ENV == 'production') {
  app.all('*', ensureSecure);
}

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './app/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.sendfile('./dist/index.html');
});

app.get('/beta', function(req, res) {
    res.redirect('https://itunes.apple.com/us/app/edyn/id939748941');
});

app.get('/about', function(req, res) {
    res.sendfile('./dist/about.html');
});

// app.get('/privacy', function(req, res) {
//     res.sendfile('./dist/privacy.html');
// });

app.get('/getstarted', function(req, res) {
    res.redirect('/support');
});

app.get('/resetpassword', function(req, res) {
    res.sendfile('./dist/resetpassword.html');
});

app.get('/order', function(req, res) {
    res.sendfile('./dist/order.html');
});

var devicesByName = {
  'Edyn Garden Sensor': 'sensor',
  'Edyn Water Valve': 'valve'
};

app.get('/inventory', function(req, res) {
    var config = Config.get('celery');

    var apiUrl = config.url;
    var token = config.token;

    var options = {
        method: 'GET',
        url: apiUrl + '/products',
        json: true,
        headers: {
            Authorization: config.token
        }
    };

    request(options, function(error, response, body) {
        if (error) {
            console.log(error);
            res.status(500).send('Error fetching inventory');
            return;
        }

        var rawProducts = body.data;

        if (rawProducts.length === 0) {
          res.status(500).send('No inventory');
          return;
        }

        var userId = rawProducts[0].user_id;

        var products = [];

        rawProducts.forEach(function (product) {
          var name = product.name;
          var device = devicesByName[name];

          // this should only happen if someone changes the name of
          // a device on Celery.
          if (!device) {
            return;
          }

          var ships = {
            sensor: 'Ships in 1 business day',
            valve: 'Ships in 1 business day'
          }[device];

          products.push({
            id: product._id,
            name: name,
            price: product.price,
            inventory: product.inventory,
            device: device,
            ships: ships
          });
        });

        res.send({
          products: products,
          apiUrl: apiUrl,
          userId: userId
        });
    });
});

app.post('/confirmation', function(req, res) {
    res.location('/confirmation');

    var order = req.body;

    function formatMoney (val) {
      return '$' + (val / 100).toFixed(2);
    }

    var moneys = ['total', 'linetotal', 'discount', 'taxes', 'shipping'];
    moneys.forEach(function (attr) {
      order[attr] = formatMoney(order[attr]);
    });

    order.line_items.forEach(function (lineItem) {
      lineItem.total = formatMoney(lineItem.price * lineItem.quantity);
      lineItem.price = formatMoney(lineItem.price);
      lineItem.device = devicesByName[lineItem.product_name];
    });

    res.render('confirmation', {
        order: order
    });
});


///
// Backwards compatibility
///

app.get('/faq', function(req, res) {
    res.redirect('/support');
});

app.get('/company', function(req, res) {
    res.redirect('/about');
});

app.get('/support', function(req, res) {
    res.sendfile('./dist/support.html');
});

///
// End of backwards compatibility section
///

var port = Config.get('port');
console.log('running app on ' + port);
app.listen(port);
