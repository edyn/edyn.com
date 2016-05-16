# edyn.com
Edyn marketing website

The template structure is generated using [Gulp Web App](https://github.com/yeoman/generator-gulp-webapp). It provides basic Gulp setup to build, test & preview the app. Here are few commands to run while developping the marketing website:

- Launch `npm install` to install NodeJS dependencies
- Launch `npm run bower` to install frontend dependencies
- Launch `npm run server` to preview the web app

When you launch via “gulp serve”, the routing doesn’t work (Express maps /about to the correct html file in production), but I usually just test the pages manually ‘/about.html’ for example while developing.

- `NODE_ENV=dev node web.js` so routes actually work (but no hot reloading)

- Launch `npm run build` to build the app static & minified files

Before committing changes to git, please make sure you have run `npm run build`.

The staging environement is setup on Heroku. A procfile has bee created to run the app using Express.js
Before deploying on Heroku, please make sure you have run `npm run build`.


# Testing orders

Setup test inventory and coupons on [celery](https://dashboard-sandbox.trycelery.com/coupons)

Orders can be test using stripe test card numbers. Here's some to use
```
working:          4242424242424242
declined          4000000000000002
declined (fraud)  4100000000000019
incorrect cvc:    4000000000000127
expired:          4000000000000069
processing error: 4000000000000119
```

more details in
[stripe testing docs](https://stripe.com/docs/testing)
[celery docs](https://github.com/airbrite/celery-api)

the way the site is currently set up the routing doesn't work properly with the gulp dev server so it can be helpful to stub this out into the top of EdynStore.loadInventory when iterating on css.
```
var FAKE_INVENTORY = {
  products: [
    {
      id: '5654f1f9d5ec870300f2403c',
      name: 'Edyn Water Valve',
      price: 5999,
      inventory: 50,
      sku: 'valve'
    },
    {
      id: '5654f1c5d5ec870300f24039',
      name: 'Edyn Garden Sensor',
      price: 9999,
      inventory: 0,
      sku: 'sensor'
    }
  ],
  userId: '5654f01bd5ec870300f24037',
  apiUrl: 'https://api-sandbox.trycelery.com/v2'
};

this.setup(FAKE_INVENTORY);
callback(null, null);
return;
```
