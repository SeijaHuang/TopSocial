const axios = require('axios');
const getMessage = async(req, res) => {
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
};

module.exports = {getMessage};