const express = require('express');
const router = express.Router();
const { createCategoryValidator, updateCategoryValidator } = require('../middlewares/category.middleware');
const { readCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');
router.route('/')

    //read Category
    .get(readCategory)

    //create Category
    .post(createCategoryValidator, createCategory)

    // update Category
    .patch(updateCategoryValidator, updateCategory)

    //delete Company
    .delete(deleteCategory);

module.exports = router;
