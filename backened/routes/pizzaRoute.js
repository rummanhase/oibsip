const express = require('express');
const router = express.Router();
const pizzaModel = require('../models/PizzaModel')

router.get('/getPizzas' , async(req , res)=>{
    try{
        const allPizza = await pizzaModel.find({})
        res.send(allPizza)
    }catch(err){
        res.json({message : err})
    }
})
module.exports = router;