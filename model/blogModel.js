const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      unique: true, // title unique hunu parcha
      required: true, // title required hunu parcha
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;