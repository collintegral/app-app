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

    app.get("/api/signup/:username/:inputpassword/:email", (req, res) => {
        db.User.findOrCreate({ email: inputemail }, {/*Body Object Goes here*/ }, (err, click, created) => {
            if (created) {
                // Successful user generation
            }
            else {
                //email already exists!
            }
        })
    })
}