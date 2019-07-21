const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema ({
    compID: {
        type: Number
        , required: true
        , unique: true
    }
    , compName: {
        type: String
        , required: true
        , unique: true
    }
    , compSize: {
        type: String
        , enum: ["full", "half", "quarter"]
    }
    , compContent: String
});

const Component = mongoose.model("Component", ComponentSchema)

module.exports = Component;