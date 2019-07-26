const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema ({
    compID: {
        type: Number
        , required: true
    }
    , compPosition: {
        type: Number
        , unique: true
    }
    , compContent: String
});

const Component = mongoose.model("Component", ComponentSchema)

module.exports = Component;