const refreshTokens = require('./tokens.middleware');

function logout(req, res, next) {
    const tok = {
        token: req.get('Authorization')
    };
    //again we cannot get refreshTokens
    refreshTokens = refreshTokens.filter(t => t !== tok.token);
    res.send('Logout Successful');
};

module.exports = logout;