const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../models");

const TabSchema = new Schema({
   tabName: {
       type: Text
       , required: true
   }
   , tabContents: [db.Component]
});

const Tab = mongoose.model("Tab", TabSchema);
module.export = Tab;