let  express = require('express');
let bodyParser = require ('body-parser');

let {mongoose} = require ('./db/mongoose');
let {Todo} = require ('./models/todo');
let {User} = require ('./models/user');

let app = express();

app.use(bodyParser.json());

app.post ('/todos', (req, res)=>{
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send (doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos',  (req, res) =>{
    Todo.find().then ((todos) =>{
        res.send({  todos, });
    }, (e) => {
    res.status(400).send(e);
    });
});

app.listen (3000, () => {
    console.log('Started up on port 3000');
});

module.exports = {app};
