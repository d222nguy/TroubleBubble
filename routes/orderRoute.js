const {v4: uuidv4} = require("uuid");
const express = require("express");
const stripe = require("stripe")("sk_test_51IrXknICIeTQCcpM58M6O7UFxJuGmtC2c1Z7bvw0kWg0pReBbVTRTGlMqiPAqvsaURWj1KddUvOGOWpN9D91DtG500fw4fBjzR");
const router = express.Router();
const User = require("../models/user_model");

const Order = require("../models/order_model");
router.post("/place", async(req, res) => {
    const {token, subtotal, current_user, cartItems} = req.body
    try{
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,

        })
        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency: 'CAD',
            customer: customer.id,
            receipt_email: token.email
        }, {idempotencyKey: uuidv4()})

        if (payment){
            const new_order = new Order({
                name: current_user.name,
                email: current_user.email,
                userid: current_user._id,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                },
                transactionId: payment.source.id
            })
            new_order.save();
            res.send('Payment Succeeded!')
        }
        else{
            res.send('Payment Failed')
        }
    } catch(error){
        return res.status(400).json({message: 'Something went wrong!' + error})
    }
    
});


router.post("/get_user_orders", async(req, res) => {
    const {userid} = req.body
    try{
        const orders = await Order.find({userid: userid})
        res.send(orders)
    } catch(error){
        return res.status(400).json({message: "Something went wrong!"})
    }
})
module.exports = router;