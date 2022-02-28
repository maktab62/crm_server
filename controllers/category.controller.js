const { Op } = require('sequelize');
// trycatch field
const safeCall = require('../utils/safeCall.utils');
// database model
const Category = require('../database/models/category');
const deletePicture = require('../utils/deletePicture.utils');

const _read = safeCall(async (request, response, _next) => {

    if (request.params.id) {
        const category = await Category.findByPk(
            request.params.id, {
            include: [{
                model: Category,
                as: 'subCategory'
            }]
        });

        if (!category)
            return response.status(404).json({
                success: false,
                message: "id not found"
            });

        return response.status(200).json({
            success: true,
            message: "find successful",
            data: category
        });
    }

    if (request.body && Object.keys(request.body).length !== 0) {
        const category = await Category.findAll({
            where: { [request.body.data]: { [Op.like]: request.body.value } },
            include: [{
                model: Category,
                as: 'subCategory'
            }]
        });

        if (!category)
            return response.status(404).json({
                success: false,
                message: "id not found"
            });

        return response.status(200).json({
            success: true,
            message: "find successful",
            data: category
        });
    }

    // if (request.params.id) {
    //     const category = await Category.findByPk(request.params.id);
    //     if (!category) {
    //         const data = request.params.id.split('=');
    //         const category = await Category.findAll({
    //             where: { [data[0]]: { [Op.like]: data[1] } }
    //         });
    //         return response.status(200).json({
    //             success: true,
    //             message: "find successful",
    //             data: category
    //         });
    //     }
    //     return response.status(200).json({
    //         success: true,
    //         message: "find successful",
    //         data: category
    //     });
    // }

    const category = await Category.findAll({
        include: {model: Category, as: 'subCategory', required: true},
    });

    if (!category)
        return response.status(404).json({
            success: false,
            message: "id not found"
        });

    return response.status(200).json({
        success: true,
        message: "find successful",
        data: category
    });

});
const _create = safeCall(async (request, response, _next) => {

    //validation error
    if (response.locals.errorMessage.length > 0)
        return response.status(406).json({
            success: false,
            message: response.locals.errorMessage
        });

    if (request.files['smallImage']) {
        request.body.smallImage = request.files['smallImage'][0].filename
    }
    if (request.files['bigImage']) {
        request.body.bigImage = request.files['bigImage'][0].filename
    }
    if (request.files['bannerImage']) {
        request.body.bannerImage = request.files['bannerImage'][0].filename
    }
    if (request.files['iconImage']) {
        request.body.iconImage = request.files['iconImage'][0].filename
    }

    const createdCategory = await Category.create(request.body);

    return response.status(200).json({
        success: true,
        message: "create successful",
        data: createdCategory.id
    });

});
const _update = safeCall(async (request, response, _next) => {

    //validation error
    if (response.locals.errorMessage.length > 0)
        return response.status(406).json({
            success: false,
            message: response.locals.errorMessage
        });

    const category = await Category.findByPk(request.params.id);

    if (request.files['smallImage'] && category.smallImage) {
        request.body.smallImage = request.files['smallImage'][0].filename
        deletePicture(category.smallImage);
    }
    if (request.files['bigImage'] && category.bigImage) {
        request.body.bigImage = request.files['bigImage'][0].filename
        deletePicture(category.bigImage);
    }
    if (request.files['bannerImage'] && category.bannerImage) {
        request.body.bannerImage = request.files['bannerImage'][0].filename
        deletePicture(category.bannerImage);
    }
    if (request.files['iconImage'] && category.iconImage) {
        request.body.iconImage = request.files['iconImage'][0].filename
        deletePicture(category.iconImage);
    }

    const updatedCategory = await Category.update(request.body, { where: { id: request.params.id } });

    if (!updatedCategory)
        return response.status(404).json({
            success: false,
            message: "id not found"
        });

    return response.status(200).json({
        success: true,
        message: "updated successful"
    });

});
const _delete = safeCall(async (request, response, _next) => {

    const deletedCategory = await Category.destroy({
        where:
            { id: request.params.id }
    })

    if (!deletedCategory)
        return response.status(404).json({
            success: false,
            message: "id not found"
        });

    return response.status(200).json({
        success: true,
        message: "deleted successful"
    });

});

module.exports = {
    _read,
    _create,
    _update,
    _delete
};