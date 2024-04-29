const express = require('express');
const messageRouter = express.Router();
const {getMessage} = require('../controllers/messageController');

// /api/message get message
//前端 http://localhost/api/message
//后端 http://localhost:8000/message
messageRouter.get('/', getMessage);

module.exports = messageRouter;