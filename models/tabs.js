import mongoose from 'mongoose';
import Component from './components';

const { Schema } = mongoose;
const TabSchema = new Schema({
  tabName: {
    type: String,
    required: true,
  },
  tabContents: [Component],
});

module.export = TabSchema;
