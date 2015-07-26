# edyn.com
Edyn marketing website

The template structure is generated using [Gulp Web App](https://github.com/yeoman/generator-gulp-webapp). It provides basic Gulp setup to build, test & preview the app. Here are few commands to run while developping the marketing website:

- Launch `npm install` to install NodeJS dependencies
- Launch `bower install` to install frontend dependencies
- Launch `gulp serve` to preview the web app
- Launch `gulp build` to build the app static & minified files

The staging environement is setup on Heroku. A procfile has bee created to run the app using Express.js
Before deploying on Heroku, please make sure you have run `gulp build`.
