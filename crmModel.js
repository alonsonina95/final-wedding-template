const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const GuestSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const Guest = mongoose.model('guest', GuestSchema);
module.exports = Guest;