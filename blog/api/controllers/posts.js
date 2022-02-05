const Post = require("../models/Post");


exports.createPost = async (req, res, next) => {

    try {
        const post = await Post.create(req.body);
        res.status(201).json({
            message: "Post created successfully",
            post: post
        });
    } catch (error) {
        next(error);
    }
}

exports.getAllPost = async (req, res, next) => {
    try {
        const post = await Post.find({});
        if(!post){
            res.status(404).json("Post not found");
        }
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
}

exports.getPost = async (req, res, next) => {
    try {
        
        const post = await Post.findById(req.params.postId);
        if(!post){
            res.status(404).json("Post not found");
        }
        res.status(200).json(post);

    } catch (error) {
        next(error);
    }
}

exports.deletePost = async(req, res, next) => {

    try {
       const post= await Post.findByIdAndDelete(req.params.postId);
        if(!post){
            res.status(404).json("Post not found");
        }
        res.status(200).json("Post deleted successfully");
    } catch (error) {
        next(error);
    }
}

exports.updatePost = async(req, res,next) => {

    try {
        const post = await Post.findByIdAndUpdate(req.params.postId,{$set : req.body},{new:true});
        if(!post){
            res.status(404).json("Post not found");
        }
        res.status(200).json(post);

    } catch (error) {
        next(error);
    }
}