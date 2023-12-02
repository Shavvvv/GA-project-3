const postModel = require("../models/post");

module.exports = {
  createLike,
};

async function createLike(req, res) {
  try {
    const post = await postModel.findById(req.params.id);
    post.likes.push({ username: req.user.username, userId: req.user._id }); //mutating a document
    await post.save(); // save it
    res.status(201).json({ data: "like added" });
  } catch (err) {
    res.status(400).json({ err: "like not added" });
  }
}
