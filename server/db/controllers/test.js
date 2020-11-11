const { createAuthToken } = require('../../lib/authentication/index');
const {
    getPrivateKey,
} = require('../../lib/authentication/keys/keys');

const user = {
    _id: "123",
    name: "Kappa"
}


const login = () => {
    return createAuthToken(user, getPrivateKey(), {
        algorithm: 'RS256',
    }).then((token) => ({
        user,
        token
    }))
}

const getUserById = () => {
    return createAuthToken(user, getPrivateKey(), {
        algorithm: 'RS256',
    }).then((token) => ({
        user,
        token
    }))
}

module.exports = {
    login,
    getUserById
}