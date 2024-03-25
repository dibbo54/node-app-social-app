const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const path = require("path");

const multer = require("multer");

// Configure Multer for handling multipart/form-data
// const storage = multer.diskStorage({
//     destination: './uploads/images',
    
//     filename: (req, file, cb)=>{
//      return cb(null, file.originalname);

//     }
//     });
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads/images');
  },
  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});

    // const storage = multer.diskStorage({
    //   destination: './uploads/images',
      
    //   filename: (req, file, cb)=>{
    //    return cb(null, file.originalname);
  
    //   }
    //   });

// const upload = multer({
//   dest: "./upload/images",
// });

const router = express.Router();

const upload = multer({ storage: storage });

router
  .route("/post/upload")
  .post(isAuthenticated, upload.single("image"), createPost);

router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router
  .route("/post/comment/:id")
  .put(isAuthenticated, commentOnPost)
  .delete(isAuthenticated, deleteComment);

module.exports = router;
