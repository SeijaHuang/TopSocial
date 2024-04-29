const express = require('express');
const router = express.Router();
const axios = require('axios');
const highlineRouter = require('./highline');
const profileRouter = require('./profile');
const messageRouter = require('./message');
const requestRouter = require('./message');
const cardsRouter = require('./cards');

router.use('/highline', highlineRouter);
router.use('/profile', profileRouter);
router.use('/message', messageRouter);
router.use('/request', requestRouter);
router.use('/cards', cardsRouter);

module.exports = router;