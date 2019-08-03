import mongoose from 'mongoose';
import Tab from './tabs';

const { Schema } = mongoose;
const PageSchema = new Schema({
  pageName: {
    type: String,
    required: true,
  },
  children: [Tab],
});

module.export = PageSchema;
