if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const logRouter = require('./routes/login.routes');
const cov19Router = require('./routes/covid19.routes');
const pubRouter = require('./routes/public.routes');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//for cookies npm install -S cookie-parser
//for scaffold npm install --S express-scaffold

app.use(logger('dev'));
app.use(express.static('public'));
app.use('/covid19', cov19Router);
app.use('/public', pubRouter);
app.use('/auth', logRouter);

//Ok we can use res.render to render a pug with script src = ${http:localhost}
//one of our own get endpoint to return a JS file with res.sendFile(path,options, fn)
//we also have res.get('COntent-Type') and res.set('Content-Type', 'text/plain')

app.use(function(req, res, next) {
    res.status(err.status || 404)
    .json({ message: 'No such route exists'});
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .json({ message: 'Error message'});
});

module.exports = app;