const express = require('express')
const router = express.Router();

const {createCategory,getAllCategory} = require('../controllers/categories');

router.route("/").post(createCategory).get(getAllCategory);


module.exports=router;