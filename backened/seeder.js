const mongoose = require('mongoose');

const pizzaModel = require('./models/PizzaModel');
const pizzaData = require("./data/data")
const dataFunc = async () =>{
    try{
        await pizzaModel.deleteMany();
        const allPizzas = pizzaData.map(pizza =>{return {...pizza}});
        await pizzaModel.insertMany(allPizzas)
    }
    catch(error){
        console.error(`Error in getting pizza from data ${error}`);
    }
}

module.exports = dataFunc