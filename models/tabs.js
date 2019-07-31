const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Component = require("./components.js");

const TabSchema = new Schema({
   tabName: {
       type: Text
       , required: true
   }
   , tabContents: [db.Component]
});

const Tab = mongoose.model("Tab", TabSchema);
module.export = Tab;