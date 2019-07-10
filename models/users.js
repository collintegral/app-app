const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const UserSchema = new Schema ({
    userID: {
        type: Number
        , required: true
        , unique: true
    }
    , username: {
        type: String
        , required: true
        , unique: true
    }
    , email: {
        type: String
        , required: true
        , unique: true
    }
    , passwordHash: {
        type: String
        , required: true
    }
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.validPassword = password => {
    return bcrypt.compareSync(password, this.passwordHash);
}

UserSchema.virtual("password").set(value => {
    this.passwordHash = bcrypt.hashSync(value, 15)
})

const User = mongoose.model("User", UserSchema);
module.export = User;