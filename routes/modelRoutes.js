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

    app.get("/api/login/:inputemail/:inputpassword", (req, res) => {
        inputemail = req.params.inputemail.toLowerCase();
        db.User.findOne({ email: inputemail }, (err, user) => {
            if (!err) {
                if (user.validPassword(req.params.inputpassword)) {
                    // log user in with passport
                }
                else {
                    // send error message - wrong password
                }
            }
            else {
                // send error message - not a real username
            }
        });
    });

    app.get("/api/signup/:username/:inputpassword/:email", (req, res) => {
        db.User.findOrCreate({email: inputemail}, {/*Body Object Goes here*/}, (err, click, created) => {
            if (created) {
                // Successful user generation
            }
            else {
                //email already exists!
            }
        })
    })
}