const mongoose = require('mongoose');

const ComponentSchema = require('./components');
const Fonts = require('./fonts');
const UserSchema = require('./users');
const PageSchema = require('./pages');
const TabSchema = require('./tabs');

const User = mongoose.model('User', UserSchema);
const Page = mongoose.model('Page', PageSchema);
const Tab = mongoose.model('Tab', TabSchema);
const Component = mongoose.model('Component', ComponentSchema);

module.exports = {
  Component,
  Fonts,
  User,
  Page,
  Tab,
};
