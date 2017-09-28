let mongoose = require ('mongoose');

//set up user model
let User = mongoose.model ('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        default: "Mike"
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = { User };