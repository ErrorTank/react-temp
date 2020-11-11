const {authorization, decodeAuthRequest} = require("../lib/authentication/index");
const {getPublicKey} = require("../lib/authentication/keys/keys");
const authorizationUserMiddleware = authorization(getPublicKey(), {algorithm: ["RS256"]}, decodeAuthRequest);

module.exports = {
    authorizationUserMiddleware
}