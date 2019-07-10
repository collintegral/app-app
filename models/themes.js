const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemeSchema = new Schema ({
    themeID: {
        type: Number
        , required: true
        , unique: true
    }
    , themeName: {
        type: String
        , required: true
        , unique: true
    }
    , themeCSS: {
        type: String
        , required: true
    }
});

const Theme = mongoose.model("Theme", ThemeSchema)

module.exports = Theme;