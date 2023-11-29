const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({

    title: String,
    artist: String,
    albumnCover: String

    
})


module.exports = mongoose.model("Posts", postSchema);