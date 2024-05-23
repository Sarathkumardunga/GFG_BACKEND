//File - To keep database setup part

const mongoose = require('mongoose');
require('dotenv').config(); //we want to use main mongo url


//To connect the Mongo db from the database using the variable
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.log('Error connnecting to database' + err);
})

// ALTHOUGH u have created the database file, it wont be called
// It will be called by calling this file in index.js through require