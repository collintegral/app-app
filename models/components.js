const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema ({
    , compName: {
        type: String
        , required: true
    }
    , compSize: {
        type: Number
        , enum: [1,2,3]
    }
    , compPosition: {
        type: Number
        , unique: true
    }
    , compContent: String
});

const Component = mongoose.model("Component", ComponentSchema)

module.exports = Component;