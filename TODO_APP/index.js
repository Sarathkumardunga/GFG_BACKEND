const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;  //27017

//This line helps to identify the .env file and access it
//We can treat the variable in it as a global variable and use it.
require('dotenv').config(); 
const app = express();
//Calling the created the database file (db.js) from app
require('./db') // u dont need to specify db.js
const Todo = require('./MODELS/Todo.js'); // Importing from the Models schema



app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is working fine');
});

//Creating api to view all todos
//For reading using .find() method
app.get('/gettodos', async (req, res) => {
    const allTodos = await Todo.find();
    res.json(allTodos);
});

//API to post a task
// Use post method to create an entry
app.post('/addtodos', async (req, res) => {
    const {task, completed} = req.body;
    //U can validate the provided fields
    const todo = new Todo({
        task,
        completed
    })

    const savedTodo = await todo.save();
    res.json({
        message: "Todo saved successfully",
        savedTodo: savedTodo
    });
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});
