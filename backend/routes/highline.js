const express = require('express');
const {getHighline} = require('../controllers/highlineController');
const highlineRouter = express.Router();
// /api/highline get highline
//前端 http://localhost/api/highline
//后端 http://localhost:8000/highline
highlineRouter.get('/', getHighline);

module.exports = highlineRouter;