const passport = require('passport');
const db = require('../models');

module.exports = (app) => {
  const emailRegex = /.+@.+\..+/i;

  // Get all contents of one model
  app.get('/api/listall/:request', (req, res) => {
    if (req.params.request !== 'User') {
      db[req.params.request].findAll({}).then((result) => {
        res.json(result);
      });
    }
  });

  app.post('/api/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureFlash: true,
    }));

  app.post('/api/signup', (req, res) => {
    if (req.body.email === '' || req.body.username === '' || req.body.password === '' || req.body.confpassword === '') {
      res.json('Please fill in all information.');
    } else if (!emailRegex.test(req.body.email)) {
      res.json('Invalid email. Please use a valid email.');
    } else if (req.body.password.includes(' ')) {
      res.json('Passwords cannot include a space.');
    } else if (req.body.password !== req.body.confpassword) {
      res.json('Passwords do not match.');
    } else if (req.body.password.trim().length < 6) {
      res.json('Password must be at least 6 characters long.');
    } else {
      db.User.findOrCreate({ email: req.body.email }, req.body, (err, click, created) => {
        if (created) {
          res.json('success');
        }
        res.json('Email already in use. Please try another email.');
      });
    }
  });
}
;