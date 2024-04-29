const express = require('express');
const axios = require('axios');
const profileRouter = express.Router();

// url=/api/profile get profile
profileRouter.get('/', async function (req, res){
    try {
        const url = 'http://localhost:8000/profile';
        const profile = await axios.get(url);
        console.log(profile);
        res.status(200).json({
            msg: 'get profile succeed',
            data: profile.data
        });
    } catch (error) {
        res.status(500).send('server error');
    };    
})

module.exports = profileRouter;