const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const url = process.env.mongo_uri;

console.log(url);

const dbConnect =async () =>{
    try{
        const connection = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("MongoDB Connected");
    }catch(error){
        console.log("Error in connection" , error.message);
    }
}
module.exports = dbConnect;