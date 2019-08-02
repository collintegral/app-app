import mongoose from 'mongoose';

const { Schema } = mongoose;

const ComponentSchema = new Schema({
  compID: {
    type: Number,
    required: true,
  },
  compPosition: {
    type: Number,
    unique: true,
  },
  compContent: String,
});

export default ComponentSchema;
