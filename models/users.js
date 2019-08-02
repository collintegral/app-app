import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { compareSync, hashSync } from 'bcrypt';
import findOrCreate from 'mongoose-findorcreate';
import Page from './pages';

const { Schema } = mongoose;
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

UserSchema.methods.validPassword = password => compareSync(password, this.passwordHash);

UserSchema.virtual('password').set((value) => {
  this.passwordHash = hashSync(value, 15);
});

module.export = UserSchema;
