const express = require('express');
const router = express.Router();

module.exports = () => {
    router.use('/api', require('./controllers/test')());
    return router;
};
