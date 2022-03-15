const express = require('express');
const router = express.Router();
const wrapper = require('../middlewares/category.middleware');
const uploadCategory = require('../middlewares/multer.middleware');
const { _read, _create, _update, _delete } = require('../controllers/category.controller');

router.route('/')
    //read Category
    .get(_read)

    //create Category
    .post(uploadCategory, wrapper("create"), _create)

router.route('/:id')
    //read Category with filter
    .get(_read)

    // update Category
    .patch(uploadCategory, wrapper("update"), _update)

    //delete Company
    .delete(_delete);

module.exports = router;
