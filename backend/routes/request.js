const express = require('express');
const axios = require('axios');
const requestRouter = express.Router();

// /api/request get request
//http://localhost/api/request
requestRouter.get('/', async(req, res) => {
    try{
        const url = 'http://localhost:8000/request';
        const request = await axios.get(url);
        res.status(200).json({
            msg: 'get request succeed',
            request: request.data
        })
    } catch (error) {
        res.status(500).send('server error');
    }
});

module.exports = requestRouter;