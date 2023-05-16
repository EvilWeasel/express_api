const express = require('express');
const mongoose = require('mongoose');

const VideoGameReview = require('../models/VideoGameReview');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("hello world");
});


module.exports = router;