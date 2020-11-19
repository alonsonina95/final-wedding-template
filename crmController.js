const GuestSchema =  require('./crmModel.js');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3o6ww.mongodb.net/guests?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch( err => console.log( "Error ocurring in connecting to db => " + err));



const addNewGuest = (req, res) => {

    newGuest.save((err, guest ) => {
        if (err) {
            err.send(err)
        }
        res.json(guest);
    });
}

const getGuests = (req, res) => {

    GuestSchema.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

const guetGuestWithId = (req, res) => {
    Guest.findById(req.params.guestId,(err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json(guest)
    });
}

const updateGuest = (req, res) => {
    Guest.findOneAndUpdate({_id: req.params.guestId}, req.body, { new: true , useFindAndModify: false }, (err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json(guest)
    });
}

const deleteGuest = (req, res) => {
    Guest.deleteOne({_id: req.params.guestId}, (err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted guest'});
    });
}

module.exports = {
    addNewGuest, getGuests, guetGuestWithId, updateGuest, deleteGuest
}

