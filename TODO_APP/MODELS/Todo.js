//We need mongoose to create a schema for the database
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

//We have created the schema but we need to export it
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo; //Now import it in index.js




// name: {
//     //We are addding these specific type so that
//     // user have an idea what he is entering
//     //Kind of restrictions
//     type: String,
// },
// age: {
//     type: Number,
//     default: 18,
//     min: 18,
//     max: 65
// },
// email: {
//     type: String,  
//     match: /^\S+@\S+\.\S+$/,  //email - PattMatch
//     unique: true              //for unique entries
// },
// password: {
//     type: String,
//     required: true
// },
// date: {
//     type: Date,
//     default: Date.now   //Provide the default date
// }
