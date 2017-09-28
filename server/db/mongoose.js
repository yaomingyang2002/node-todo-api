let mongoose = require ('mongoose');
mongoose.Promise = global.Promise;  //buit-in promise
mongoose.connect('mongodb://localhost:27017/TodoApp' );

module.exports = { mongoose };