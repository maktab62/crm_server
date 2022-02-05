const { Op } = require('sequelize');
// trycatch field
const safeCall = require('../utils/safeCall.utils');
// database model
const Category = require('../database/models/category');

const _read = safeCall(async (request, response, _next) => {

    if (request.params.id) {
        const category = await Category.findByPk(request.params.id);
        return response.status(200).json({
            success: true,
            message: "find successful",
            data: category
        });
    }

    if (request.body) {
        const category = await Category.findAll({
            where: { [request.body.data ] : { [Op.like]: request.body.value } }
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

    const category = await Category.findAll({});
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

    await Category.destroy({
        where:
            { id: request.params.id }
    })

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