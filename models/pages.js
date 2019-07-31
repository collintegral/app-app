const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tab = require("./tabs.js");

const PageSchema = new Schema({
   pageName: {
       type: String
       , required: true
   }
   , children: [Tab]
});

const Page = mongoose.model("Page", PageSchema);
module.export = Page;