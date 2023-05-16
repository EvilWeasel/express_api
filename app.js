// Import NPM-Packages
const express = require('express');
const mongoose = require('mongoose');

// Import Routers
const employeeRouter = require('./routes/employeeRouter');
const userRouter = require('./routes/userRouter');
const videoGameReviewRouter = require('./routes/videoGameReviewRouter');

// Connect to Database
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    .then((mongoose) => console.log(`DB Connected. Mongoose Version: ${mongoose.version}`));

// Define App and Port
const app = express();
const port = 14128;

// app.get('/', (req, res) => {
//     console.log(req);
//     res.send("Hello World!");
// });

// Server-Settings
app.use(express.urlencoded({ extended: false })); // Erlaubt parsen von HTTP-Body (z.B. JSON)

app.use(express.json()); // Erlaubt das parsen von Content-Type: application/json im req.body

// Router implementieren
app.use('/mitarbeiter', employeeRouter);
app.use('/user', userRouter);
app.use('/videogamereview', videoGameReviewRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);

    // const myUser = new User({name: "Tobi", age: 24});

    // myUser.save().then(document => console.log(document));

});