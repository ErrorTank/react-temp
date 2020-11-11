const {authorization, decodeAuthRequest} = require("../lib/authentication/index");
const {getPublicKey} = require("../../authorization/keys/keys");
const authorizationUserMiddleware = authorization(getPublicKey(), {algorithm: ["RS256"]}, decodeAuthRequest);

module.exports = {
    authorizationUserMiddleware
}