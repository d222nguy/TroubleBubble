const express = require("express");
const router = express.Router();
const Drink = require('../models/bubble_tea_model');
router.get("/getalldrinks", async(req, res) => {
    try{
        console.log('finding drinks!')
        const drinks = await Drink.find({})
        res.send(drinks)
    } catch (error){
        return res.status(400).json({message: error});
    }
});

module.exports = router;