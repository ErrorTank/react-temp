const express = require('express');
const router = express.Router();
const {authorizationUserMiddleware} = require("../middlewares/auth");
const {login, getUserById} = require("../db/controllers/test");

module.exports = () => {
    router.post("/login", (req, res, next) => {

        return login(req.body).then((data) => {
            return res.status(200).json(data);
        }).catch(err => next(err));

    });
    router.get("/auth", authorizationUserMiddleware, (req, res, next) => {

        return getUserById(req.user._id).then((data) => {
            return res.status(200).json(data);
        }).catch(err => next(err));

    });
    return router;
};