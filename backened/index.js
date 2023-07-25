const express = require('express');
const morgan = require('morgan');
const dbConnect = require('./config/config')
const dotenv = require('dotenv')
dotenv.config();
const pizzaRoute = require('./routes/pizzaRoute')

const dataFunc = require("./seeder")
dataFunc();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

dbConnect()

app.use('/api/pizza' , pizzaRoute)
app.get('/' , (req , res)=>{
    res.send()
})

const port = process.env.port || 3001;
app.listen(port, ()=>{
    console.log("Server is Runnimg");
})
