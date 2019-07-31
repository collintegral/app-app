const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Component = require('./components.js');

const TabSchema = new Schema({
  tabName: {
    type: String,
    required: true,
  },
  tabContents: [Component],
});

module.export = TabSchema;
