const jwt = require('jsonwebtokens');

function authenticateJWT(req, res, next) {
    const auth = req.get('Authorization');

    if(auth) {
        const token = authHeader.split(' ')[1];
        const access_token_secret = process.env.SECRET;

        jwt.verify(token, access_token_secret, (err, user) => {
            if(err)
                res.sendStatus(403);

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;