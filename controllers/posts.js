const Post = require("../models/post");


// import the s3 constructor (class)
const S3 = require('aws-sdk/clients/s3');
// initalize the s3 construcotr to give is the object that can perform
// our crud operations on our s3 bucket
const s3 = new S3()

// require nodes unique id function 
const { v4: uuidv4 } = require('uuid');

module.exports={
    create
}


async function create(req, res) {
  console.log('////////////// async create function in posts controller')
  console.log(req.body, '-------', req.user)
  
    if (!req.file)
      return res.status(400).json({ error: "Please submit a photo" });
  
   const filePath = `project-3/${uuidv4()}-${req.file.originalname}`
  // then make the params object that s3 object wants to send to send to aws s3 bucket
  const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer }
  // req.file.buffer is the actual image!

  s3.upload(params, async function (err, data) { // <- err, data are the response from aws s3 bucket!
    if (err) {
      console.log('=========================')
      console.log(err, ' <-- error from aws, probably wrong keys in your code ~/.aws/credentials file, or you have the wrong bucket name, are you sure you know what process.env.BUCKET_NAME is, did you log it out?')
      console.log('==========================')
    }
    try {
      // adding the information to the db
      const postDoc = await Post.create({
        user: req.user,
        photoUrl: data.Location,
        album: req.body.album,
        title: req.body.title,
        artist: req.body.artist,
      })
            
   
      // populate the users information
      await postDoc.populate("user");
      // respond to the client!
      // status 201, means resource created!
      res.status(201).json({ post: postDoc });
    } catch (err) {
      console.log(err, " <- error in create post");
      res.json({ error: "Problem with creatinga post, try again" });
    }
  })
    
}