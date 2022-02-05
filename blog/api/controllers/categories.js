const Category = require('../models/Category');


exports.createCategory = async (req, res, next) => {
    try {
    
        const category =await Category.create(req.body);
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

exports.getAllCategory = async (req, res, next) => {

    try {
        const category = await Category.find();
        if(!category){
            res.status(404).json("Category not found");
        }
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}