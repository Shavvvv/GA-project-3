const express = require("express");
const router = express.Router();
const likesCtrl = require("../../controllers/likes");


router.post('/post/:id/likes', likesCtrl.createLike)


module.exports = router;