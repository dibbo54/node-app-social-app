const express = require("express");
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
  getMyPosts,
  getUserPosts,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");
//const router = express.Router();

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
      cb(null, './avatars/images');
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

router.route("/register").post(upload.single("image"),register);

// router
//   .route("/post/upload")
//   .post(isAuthenticated, upload.single("image"), createPost);

router.route("/login").post(login);

 router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated, followUser);

 router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router.route("/me").get(isAuthenticated, myProfile);

// router.route("/my/posts").get(isAuthenticated, getMyPosts);

// router.route("/userposts/:id").get(isAuthenticated, getUserPosts);

 router.route("/user/:id").get(isAuthenticated, getUserProfile);

 router.route("/users").get(isAuthenticated, getAllUsers);

 router.route("/forgot/password").post(forgotPassword);

 router.route("/password/reset/:token").put(resetPassword);

 //app.put('/items/:id', updateItemController);


module.exports = router;
