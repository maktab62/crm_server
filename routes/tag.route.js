const express = require('express');
const router = express.Router();
const wrapper = require('../middlewares/tag.middleware');
const { _read, _create, _update, _delete } = require('../controllers/tag.controller');

router.route('/')
    //read Category
    .get(_read)

    //create Category
    .post(wrapper("create"), _create)

router.route('/:id')
    //read Category with filter
    .get(_read)

    // update Category
    .patch(wrapper("update"), _update)

    //delete Company
    .delete(_delete);

module.exports = router;
