const express = require("express");
const { createPost, getPosts, updatePost, deletePost,getPostById } = require("../controllers/postController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", getPosts);

router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.get("/:id", getPostById); 
router.delete("/:id", auth, deletePost);

module.exports = router;
