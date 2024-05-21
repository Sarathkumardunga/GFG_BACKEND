//File - To keep database setup part

const mongoose = require('mongoose');
require('dotenv').config(); //we want to use main mongo url


//To connect the Mongo db from the database using the variable
mongoose.connect(process.env.MONGO_URL);
