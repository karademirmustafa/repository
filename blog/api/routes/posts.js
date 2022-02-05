const express = require('express')
const router = express.Router();

const {createPost,getAllPost,getPost,deletePost,updatePost} = require('../controllers/posts')

router.route("/").post(createPost).get(getAllPost);
router.route("/:postId").get(getPost);
router.route("/:postId").delete(deletePost);
router.route("/:postId").patch(updatePost); //putda olabilir

module.exports=router;