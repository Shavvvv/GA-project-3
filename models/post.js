const mongoose = require("mongoose");


const likesSchema = mongoose.Schema({
  username: String,
  // One User has many likes, referencing because we have user model, so we can get the users information when we need it
  //
  userId: { type: mongoose.Schema.Types.ObjectId },
});


const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  artist: String,
 album:String,
  photoUrl: String,
  likes:[likesSchema]
});


module.exports = mongoose.model("Posts", postSchema);