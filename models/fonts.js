import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const FontSchema = new Schema({
  fontID: {
    type: Number,
    required: true,
    unique: true,
  },
  fontName: {
    type: String,
    required: true,
    unique: true,
  },
  fontLink: {
    type: String,
    required: true,
  },
});

const Font = model('Font', FontSchema);

export default Font;
