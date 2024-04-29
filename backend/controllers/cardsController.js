const axios = require('axios');

const getCards = async (req, res) => {
    const {id} = req.query;
    if(!id){
        return res.status(400).send('id is required');
    }
    try{
        const url = `http://localhost:8000/cards?id=${id}`
        const card = await axios.get(url);
        res.status(200).json({
            msg :'get the card succeed',
            card: card.data
        })
    } catch (error) {
        res.status(500).send('server error')
    }
};

const postCards =  async (req, res) => {
    const newCard = req.body;
    if(Object.keys(newCard).length === 0){
        return res.status(400).send('info is empty');
    };
    try{
        const url = 'http://localhost:8000/cards';
        await axios.post(url, newCard, {
            headers:{"Content-Type" : "application/json"}
        });
        res.status(200).json({
            msg:'card is added'
        })
    } catch (error) {
        res.status(500).send('server error')
    }
};

const deleteCards = async (req, res) => {
    const id = req.params.card_id;
    try{
        const url = `http://localhost:8000/cards/${id}`;
        await axios.delete(url);
        res.status(200).json({
            msg:'card is deleted'
        })
    } catch (error) {
        res.status(500).send('server error')
    }};

    module.exports = {getCards, postCards, deleteCards};