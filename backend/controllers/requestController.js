const axios = require('axios');

const getRequest = async (req, res) => {
    try{
        const url = 'http://localhost:8000/request'
        const request = await axios.get(url);
        res.status(200).json({
            msg: 'get request succeed',
            request: request.data
        });
    } catch (error) {
        res.status(500).send('sever error')
    }
}

module.exports = {getRequest}