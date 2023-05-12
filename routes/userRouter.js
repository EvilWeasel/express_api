const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find({}).sort({ age: 'asc' });
    console.log(users);
    res.status(200).send(users);
});

router.get('/:name', async (req, res) => {
    const username = req.params.name;

    const user = await User.findOne({ name: username });

    res.status(200).send(user);
});

router.post('/', async (req, res) => {
    const { name, age, email, password, favoriteDrinks, address } = req.body;
    const newUser = new User({
        name: name,
        age: age,
        email: email,
        password: password,
        favoriteDrinks: favoriteDrinks,
        address: address
    });
    await newUser.save();
    res.status(201).send("Created");
});


module.exports = router;