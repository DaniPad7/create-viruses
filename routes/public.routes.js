const express = require('express');
// const someMiddleware = require('../Middleware/somemiddleware');
// const covid19Controller = require('../Controllers/someController');
const publicRouter = express.Router();
const path = require('path');
//sends a css file
publicRouter.get('/style/:number', function(req, res) {
    const num = Number(req.params.number);
    const options = {
        root: path.join(__dirname, '../public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    let fileName;
    switch(num) {
        case 1:
            fileName = '/stylesheets/covid19.css';
            res.sendFile(fileName, options);
            break;
        case 2:
            fileName = '/stylesheets/home.css';
            res.sendFile(fileName, options);
            break;
        default:
            res.status(404).send('404 Not Found');
            break;
    }
    
});
//sends a JS file
publicRouter.get('/scripts/:number', function(req, res) {
    const num = Number(req.params.number);
    const options = {
        root: path.join(__dirname, '../public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    let fileName;
    switch(num) {
        case 1:
            fileName = '/javascripts/covid19.js';
            res.sendFile(fileName, options);
            break;
        case 2:
            fileName = '/javascripts/home.js';
            res.sendFile(fileName, options);
            break;
        default:
            res.status(404).send('404 Not Found');
    }
});
//sends jpg files
publicRouter.get('/image/:number', function(req, res) {
    const number = Number(req.params.number);
    console.log(number);
    let fileName;
    const options = {
        root: path.join(__dirname, '../public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    
    switch(number) {
        case 1:
            fileName = '/images/tamanna-rumee-eL37cd2xW5U-unsplash.jpg';
            res.sendFile(fileName, options);
            break;
        default:
            res.status(404).send("404 Not Found");
            break;
    }
});

module.exports = publicRouter;