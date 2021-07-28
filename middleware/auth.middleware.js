const jwt = require('jsonwebtoken');
const refreshTokens = require('./tokens.middleware');

function generateToken(req, res, next) {
    const users = [{
        username: 'john',
        password: 'pass123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'pass123member',
        role: 'member'
    }];
    
    const access_token_secret = process.env.SECRET;
    const refresh_token_secret = process.env.REFRESH;


    const information = {
        username: req.body.username,
        password: req.body.password
    };

    const user = users.find(el => el.password === information.password && el.username === information.password);

    if(user) {
        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, access_token_secret, { expiresIn: '60m' });

        const refreshToken = jwt.sign({
            username: user.username,
            role: user.role
        }, refresh_token_secret);

        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken
        });
    } else {
        res.send('Username or password is incorrect');
    }
};

module.exports = generateToken;

