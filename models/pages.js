const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../models");

const PageSchema = new Schema({
   pageName: {
       type: Text
       , required: true
   }
   , children: [db.Tab]
});

const Page = mongoose.model("Page", PageSchema);
module.export = Page;