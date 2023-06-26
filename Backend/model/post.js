const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    Clgname: {
      type: String,
      require: true,
      
      },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Post", PostSchema)
