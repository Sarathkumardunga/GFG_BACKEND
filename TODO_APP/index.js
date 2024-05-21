const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;  //27017

//This line helps to identify the .env file and access it
//We can treat the variable in it as a global variable and use it.
require('dotenv').config(); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is working fine');
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});
