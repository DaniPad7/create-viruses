const express = require('express');
// const someMiddleware = require('../Middleware/somemiddleware');
// const covid19Controller = require('../Controllers/someController');
const loginRouter = express.Router();


// router.get('/', (request, response) => {
//     response.sendFile('index.html');
// });

loginRouter.post('/login', (request, response) => {
    let username = request.body.user;
    let password = request.bosy.password;
    console.log(`Username = ${username}, password is ${password}`);
    response.end('yes');
});

module.exports = loginRouter;