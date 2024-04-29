const express = require('express');
const axios = require('axios');
const messageRouter = express.Router();

// /api/message get message
//前端 http://localhost/api/message
//后端 http://localhost:8000/message
messageRouter.get('/', async(req, res) => {
    try{
        const url='http://localhost:8000/message';
        const message = await axios.get(url);
        res.status(200).json({
            msg: 'get message succeed',
            message: message.data
        });
    } catch (error) {
        res.status(500).send('server error');
    };
});

module.exports = messageRouter;