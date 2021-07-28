const express = require('express');
// const someMiddleware = require('../Middleware/somemiddleware');
// const covid19Controller = require('../Controllers/someController');
const loginRouter = express.Router();


// router.get('/', (request, response) => {
//     response.sendFile('index.html');
// });

loginRouter.post('/login', (req, res) => {
    

});

module.exports = loginRouter;