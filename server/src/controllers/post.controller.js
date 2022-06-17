const express = require('express')
const Post = require('../model/post.model')

const getPosts = async(req,res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getPost = async (req, res) => {
    const { id } = req.params;

    try {
      const post = await PostMessage.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};

const createPost = async (req, res) => {
    const post = req.body
    const newPost = new Post(post)

  try {
    await newPost.save()
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
    getPosts,
    getPost,
    createPost
}