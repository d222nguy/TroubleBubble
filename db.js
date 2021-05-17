const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://duydn95:P5OlT7LjE1KtBdO8@cluster0.6kmf1.mongodb.net/mern-bubble-tea'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', () => {
    console.log(`MongoDB Connection Successful!`);
})

db.on('error', () => {
    console.log(`MongoDB Connection failed!`);
})

module.exports = mongoose