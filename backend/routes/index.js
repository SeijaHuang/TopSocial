const express = require('express');
const router = express.Router();
const axios = require('axios');

// url=/api/profile get profile
router.get('/profile', async function (req, res){
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
});

// /api/highline get highlineyar
//前端 http://localhost/api/highline
//后端 http://localhost:8000/highline
router.get('/highline', async(req, res) => {
    try {
        const url = 'http://localhost:8000/highline';
        const highline = await axios.get(url);
        console.log(highline);
        res.status(200).json({
            msg: 'get highline succeed',
            data:{
                highline: highline.data,
            } 
        });
    } catch (error) {
        res.status(500).send('server erroe');
    };
})
// /api/message get messgae
//前端 http://localhost/api/message
//后端 http://localhost:8000/message
router.get('/message', async(req, res) => {
    try{
        const url='http://localhost:8000/message';
        const message = await axios.get(url);
        console.log(message);

    } catch (error) {

    }
})

module.exports = router;