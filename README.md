# edyn.com
Edyn marketing website

The template structure is generated using [Gulp Web App](https://github.com/yeoman/generator-gulp-webapp). It provides basic Gulp setup to build, test & preview the app. Here are few commands to run while developping the marketing website:

- Launch `npm install` to install NodeJS dependencies
- Launch `npm run bower` to install frontend dependencies
- Launch `npm run server` to preview the web app

When you launch via “gulp serve”, the routing doesn’t work (Express maps /about to the correct html file in production), but I usually just test the pages manually ‘/about.html’ for example while developing.

- Launch `npm run build` to build the app static & minified files

Before committing changes to git, please make sure you have run `npm run build`.

The staging environement is setup on Heroku. A procfile has bee created to run the app using Express.js
Before deploying on Heroku, please make sure you have run `npm run build`.
