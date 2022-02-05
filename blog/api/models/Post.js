const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    title: {type:String,required:true,unique:true},
    description: {type:String,required:true},
    photo: {type:String,required:false},
    content: {type:String,required:true},
    username : {type:String,required:true},
    categories: {type:String,required:false}
    //title ve username unique yapılabilir belki index ile
},{timestamps:true,collection:"posts"});

const Post = mongoose.model("Post",PostSchema);

module.exports=Post;