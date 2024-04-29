const express = require('express');
const axios = require('axios');
const highlineRouter = express.Router();

// /api/highline get highline
//前端 http://localhost/api/highline
//后端 http://localhost:8000/highline
highlineRouter.get('/', async(req, res) => {
    try {
        const url = 'http://localhost:8000/highline';
        const highline = await axios.get(url);
        res.status(200).json({
            msg: 'get highline succeed',
                highline: highline.data
        });
    } catch (error) {
        res.status(500).send('server error');
    };
});

module.exports = highlineRouter;