

const express = require('express')
const router = express.Router()
const {  getPosts, getPost,  createPost} = require("../controllers/post.controller")

router.get("/",getPosts)
router.get("/id", getPost);
router.post("/", createPost);

module.exports = router