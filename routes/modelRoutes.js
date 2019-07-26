const passport = require('passport');
const db = require('../models');

module.exports = (app) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    // Get all contents of one model
    app.get('/api/listall/:request', (req, res) => {
        if (req.params.request !== 'User') {
            db[req.params.request].findAll({}).then(result => {
                res.json(result);
            });
        }
    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureFlash: true
        })
    );

    app.post('/signup', (req, res) => {
        if (req.body.email === '' || req.body.username === '' || req.body.password === '' || req.body.confpassword === '') {
            return 'errblank';
        }
        if (!emailRegex.test(req.body.email)) {
            return 'errinvemail';
        }
        if (req.body.password.includes(' ')) {
            return 'errspace';
        }
        if (req.body.password !== req.body.confpassword) {
            return 'errpasswords';
        }
        if (req.body.password.trim().length < 6) {
            return 'errpasswordlength';
        }
        db.User.findOrCreate({ email: req.body.email }, req.body, (err, click, created) => {
            if (created) {
                return 'success';
            }
                return 'erralreadyused';
        });
    });
}