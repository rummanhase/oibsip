const express = require('express');
const morgan = require('morgan');
const dbConnect = require('./config/config')
const dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

dbConnect()

app.get('/' , (req , res)=>{
    res.send()
})

const port = process.env.port || 3004;
app.listen(port, ()=>{
    console.log("Server is Runnimg");
})
//