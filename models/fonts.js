const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FontSchema = new Schema({
    fontID: {
        type: Number
        , required: true
        , unique: true
    }
    , fontName: {
        type: String
        , required: true
        , unique: true
    }
    , fontLink: {
        type: String
        , required: true
    }
});

const Font = mongoose.model("Font", FontSchema)

module.exports = Font;