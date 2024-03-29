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
      publicId: String,
        url: String,
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
