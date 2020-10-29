const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { addNewGuest, getGuests, guetGuestWithId, updateGuest, deleteGuest } = require('./crmController') 

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/guest', getGuests);

app.post('/guest/:guestId', addNewGuest);

app.post('/guest/:guestId', guetGuestWithId);

app.put('/guest/:guestId', updateGuest);

app.delete('/guest/:guestId', deleteGuest);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
