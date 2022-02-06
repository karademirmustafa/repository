const Image = require("../models/Image");
const fs = require('fs');
const path = require('path');


exports.getImage = async (req, res, next) => {
    try {
        const image = await Image.findById(req.params.imageId);
        res.status(200).json(image);
    } catch (error) {
        next(error);
    }
}

exports.getAllImage = async (req, res, next) => {
    try {
        const image = await Image.find();
        res.status(200).json(image);
    } catch (error) {
        next(error);
    }
}


exports.uploadImage = async (req, res, next) => {
    try {
        const image= await Image.create({
            name : req.body.name,
            desc : req.body.desc,
            img:req.file.filename
        })
        res.status(200).json(image);
    } catch (error) {
        next(error);
    }
}