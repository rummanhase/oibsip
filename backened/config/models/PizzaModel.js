const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name:String,
    varient:[],
    prices:[],
    category:String,
    image:String,
    description:String
} , {
    timestamps:true
})

const pizzaModel = mongoose.model('pizza'  , pizzaSchema)

module.exports = pizzaModel;


