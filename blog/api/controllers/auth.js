const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.createUser = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        const {password,_id,...others} =user._doc;
        
        res.status(200).json(others);
    } catch (error) {
        next(error);
    }
}

exports.loginUser = async (req,res,next)=> {
    try {
        const user = await User.findOne({username:req.body.username});
        !user && res.status(400).json("Wrong credentials!")

        const validated = await bcrypt.compare(req.body.password,user.password);
        !validated && res.status(400).json("Wrong credentials!");

        const {password,...others} =user._doc;
        res.status(200).json(others);
    } catch (error) {
        next(error);
    }
}