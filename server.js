const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');

const routes = require('./routes/modelRoutes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

// Load up the mongoose server
mongoose.connect('mongodb://localhost/appApp', { useNewUrlParser: true });

const server = app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;