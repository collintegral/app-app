const db = require("../models");

module.exports = (app) => {
    // Get all contents of one model
    app.get("/api/listall/:request", (req, res) => {
        if (req.params.request !== "User") {
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

    app.post("/signup", (req, res) => {
        // Check validity of sign-up info
        // - email is valid
        // - username contains valid characters
        // - password is long enough and has a variety of characters
        
        db.User.findOrCreate({ email: req.body.email }, req.body, (err, click, created) => {
            if (created) {
                // Successful user generation
            }
            else {
                //email already exists!
            }
        })
    })
}