const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const router = express.Router();

// GET Alle User
router.get('/', async (req, res) => {
    const users = await User.find({}).sort({ age: 'asc' });
    // console.log(users);
    res.status(200).send(users);
});

// Einfaches Beispiel für Passwort-Hashing
router.get('/test', async (req, res) => {
    const password = "P@ssword";
    console.log("Password = " + password);
    
    const salt = await bcrypt.genSalt(10);
    
    console.log("Salt = " + salt);
    
    const hashedPassword = await bcrypt.hash(password, salt);
    
    console.log(hashedPassword);
    
    console.log(bcrypt.compareSync(password, hashedPassword));
    
    res.status(200).send(password);
});

// GET Ein User basierend auf Name
router.get('/:name', async (req, res) => {
    const username = req.params.name;
    
    const user = await User.findOne({ name: username });
    
    res.status(200).send(user);
});

// POST Erstelle neuen Benutzer
router.post('/', async (req, res) => {
    // Objekt-Destructuring
    const { name, age, email, password, favoriteDrinks, address } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        //console.log(hashedPassword);
        const newUser = new User({
            name: name,
            age: age,
            email: email,
            password: hashedPassword,
            favoriteDrinks: favoriteDrinks,
            address: address
        });
        await newUser.save();
        res.status(201).send("Created");
    } catch {
        res.status(500).send("Something went wrong...");
    }
});

// POST Login und Token-Request
router.post('/login', async (req, res) => {
    // hole email und passwort aus dem request body zum vergleichen
    const { email, password } = req.body;
    // console.log(email);
    try {
        const user = await User.findOne({ email: email });
        
        if (user == null) {
            return res.status(404).send("User not found.");
        }
        
        if (await bcrypt.compare(password, user.password)) {
            res.status(200).send("Logged In"); // todo: implement jwt
        } else {
            res.status(401).send("Invalid Credentials");
        }
    } catch {
        res.status(500).send("Something went wrong.");
    }
});

router.put('/:name', async (req, res) => {
    const { name, age, email, password, favoriteDrinks, address } = req.body;
    const nameParam = req.params.name;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.findOneAndUpdate({ name: nameParam }, {
            $set: {
                name: name,
                age: age,
                email: email,
                password: hashedPassword,
                favoriteDrinks: favoriteDrinks,
                address: address
            }
        });

        if (user == null) {
            return res.status(404).send("User not found.");
        } else {
            return res.status(200).send(user);
        }
    } catch {
        return res.status(500).send("Something went wrong.");
    }
})



module.exports = router;