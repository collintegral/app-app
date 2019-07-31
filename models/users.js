const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const findOrCreate = require('mongoose-findorcreate');
const Page = require('./pages.js');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  children: [Page],
});

UserSchema.plugin(uniqueValidator);
UserSchema.plugin(findOrCreate);

UserSchema.methods.validPassword = password => bcrypt.compareSync(password, this.passwordHash);

UserSchema.virtual('password').set((value) => {
  this.passwordHash = bcrypt.hashSync(value, 15);
});

module.export = UserSchema;
