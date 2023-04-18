const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/', controller.awesomePersonFunction);

module.exports = routes;