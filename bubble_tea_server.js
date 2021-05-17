const express = require("express");
const db = require("./db")
const app = express();

app.use(express.json());

const path = require('path')
const drinksRoute = require('./routes/bubbleRoute');

const userRoute = require("./routes/userRoute");

const orderRoute = require('./routes/orderRoute');

app.use('/api/drinks/', drinksRoute)
app.use('/api/users/', userRoute)

app.use('/api/orders/', orderRoute)

if (process.env.NODE_ENV === "production"){
    app.use('/', express.static('bubble_tea_client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'bubble_tea_client/build/index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port`);