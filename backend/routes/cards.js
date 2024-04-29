const express = require('express');
const axios = require('axios');
const cardsRouter = express.Router();

// /api/cards?id=1   get a card
// http://localhost/api/cards?id=1
// id的get不需要再''里面写？id=1 静态参数后端是不需要定义的

cardsRouter.get('/', async (req, res) => {
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
});

// /api/cars     post a card
// http://localhost/api.cards
// http://localhost:8000/cards
cardsRouter.post('/', async (req, res) => {
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
});

// /api/cards/:card_id  delete card by id
// http://localhost/api/cards/:card_id
// http://localhost:8000/cards/5 删除的格式
// 动态参数后端是定义的

cardsRouter.delete('/:card_id', async (req, res) => {
    const id = req.params.card_id;
    try{
        const url = `http://localhost:8000/cards/${id}`;
        await axios.delete(url);
        res.status(200).json({
            msg:'card is deleted'
        })
    } catch (error) {
        res.status(500).send('server error')
    }}
);

module.exports = cardsRouter