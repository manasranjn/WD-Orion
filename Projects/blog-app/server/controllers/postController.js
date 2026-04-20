const Post = require('../models/post');
const mongoose = require('mongoose');

const createPost = async (req, res) => {
    try {
        // console.log(req.body);

        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
}