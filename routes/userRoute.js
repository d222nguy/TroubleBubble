const express = require("express");
const router = express.Router();
const User = require("../models/user_model");
router.post("/register", async(req, res) => {
    const {name, email, password} = req.body

    const new_user = new User({name, email, password})

    try{
        new_user.save();
        res.send('User Registered!');
    } catch (error){
        return res.status(400).json({message: error});
    }
});

router.post("/login", async(req, res) => {
    const {email, password} = req.body
    try{
        console.log('accessed login endpoint');
        const user = await User.find({email, password});

        if (user.length > 0){
            const current_user = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(current_user);
        }
        else{
            console.log('user.length = 0')
            return res.status(400).json({message: 'User Login Failed!'});
        }
    } catch(err){
        return res.status(400).json({message: 'Something went wrong!'});
    }
});
module.exports = router