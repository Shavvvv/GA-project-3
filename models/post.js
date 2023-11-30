const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  artist: String,
 album:String,
  photoUrl: String,
});


module.exports = mongoose.model("Posts", postSchema);