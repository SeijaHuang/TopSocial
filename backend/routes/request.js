const express = require('express');
const requestRouter = express.Router();
const {getRequest} = require('../controllers/requestController')

// /api/request get request
//http://localhost/api/request
requestRouter.get('/', getRequest);

module.exports = requestRouter;