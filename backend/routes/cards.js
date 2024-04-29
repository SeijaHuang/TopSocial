const express = require('express');
const cardsRouter = express.Router();
const {getCards, postCards, deleteCards} = require('../controllers/cardsController');
// /api/cards?id=1   get a card
// http://localhost/api/cards?id=1
// id的get不需要再''里面写？id=1 静态参数后端是不需要定义的

cardsRouter.get('/', getCards);

// /api/cars     post a card
// http://localhost/api.cards
// http://localhost:8000/cards
cardsRouter.post('/', postCards);

// /api/cards/:card_id  delete card by id
// http://localhost/api/cards/:card_id
// http://localhost:8000/cards/5 删除的格式
// 动态参数后端是定义的

cardsRouter.delete('/:card_id', deleteCards);

module.exports = cardsRouter