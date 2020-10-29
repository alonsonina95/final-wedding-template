const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const GuestSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    }
})

module.exports = GuestSchema