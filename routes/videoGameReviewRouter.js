const express = require('express');
const mongoose = require('mongoose');

const VideoGameReview = require('../models/VideoGameReview');

const router = express.Router();

// GET Eine Review basierend auf dem (Namen)
router.get('/:name', async (req, res) => {
    try {
        const videoGameReviewName = req.params.name;
        if (videoGameReviewName == null)
            return res.status(400).send('Missing Param "name".');
        const videoGameReview = await VideoGameReview.findOne({ name: videoGameReviewName });
        if (videoGameReview == null) 
            return res.status(404).send(`Review with given name "${videoGameReviewName}" does not exist...`);
        res.status(200).send(videoGameReview);
    } catch {
        res.status(500).send("Something went wrong.");
    }
});

// POST Erstelle eine Review basierend auf Daten im Request.Body
router.post('/', async (req, res) => {
    try {
        const { name, description, rating, image, article } = req.body;

        const videoGameReview = new VideoGameReview({
            name: name,
            description: description,
            rating: rating,
            image: image,
            article: article
        });

        await videoGameReview.save();
        res.status(201).send(videoGameReview);
    } catch {
        res.status(500).send("Something went wrong.");
    }
})

// PUT Ändere die Review, welche über die Request.Params angegeben ist basierend
//  auf Daten im Request.Body

// DELETE Lösche die Review, welche über die Request.Params angegeben ist


router.get('/', (req, res) => {
    
});


module.exports = router;