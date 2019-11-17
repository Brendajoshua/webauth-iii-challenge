const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

function generateToken(user) {
    const payload = {
        username: user.username,
        subject: user.id,
        departments: user.departments,
    };
    const options = {
        expiresIn: '1d',
    };
    
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = generateToken;