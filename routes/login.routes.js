const express = require('express');
// const someMiddleware = require('../Middleware/somemiddleware');
const genToken = require('../middleware/auth.middleware');
// const covid19Controller = require('../Controllers/someController');
const loginRouter = express.Router();

loginRouter.use('/login', genToken);
// router.get('/', (request, response) => {
//     response.sendFile('index.html');
// });

loginRouter.post('/login', (req, res) => {
    //we await these tokens in the login javascript
    res.end();
});

loginRouter.get('/homepage', (req, res) => {
    res.render('home');
});

module.exports = loginRouter;