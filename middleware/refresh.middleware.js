const jwt = require('jsonwebtoken');
const refreshTokens = require('./tokens.middleware');

function refreshNewToken(req, res, next) {
    const access_token_secret = process.env.SECRET;
    const refresh_token_secret = process.env.REFRESH;


    const tok = {
        token: req.get('Authorization')
    };

    if(!tok.token)
        res.sendStatus(401);
    //refeeshTokens is not declared here, how do we put it in scope
    else if(!refreshTokens.includes[tok.token])
        res.sendStatus(403);

    jwt.verify(tok.token, refresh_token_secret, (err, user) => {
        if(err)
            res.sendStatus(403);

        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, access_token_secret, { expiresIn: '60m' });

        res.json({ accessToken });

    });

};

module.exports = refreshNewToken;