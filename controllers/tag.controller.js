const { Op } = require('sequelize');
// trycatch field
const safeCall = require('../utils/safeCall.utils.js');
// database model
const Tag = require('../database/models/tag');

const _read = safeCall(async (request, response, _next) => {

    if (request.params.id) {
        const tag = await Tag.findByPk(request.params.id);

        if (!tag)
        return response.status(404).json({
            success: false,
            message: "id not found",
        });

        return response.status(200).json({
            success: true,
            message: "find successful",
            data: tag
        });
    }

    if (request.body && Object.keys(request.body).length !== 0) {
        const tag = await Tag.findAll({
            where: { [request.body.data]: { [Op.like]: request.body.value } }
        });
        
        if (!tag)
        return response.status(404).json({
            success: false,
            message: "id not found",
        });

        return response.status(200).json({
            success: true,
            message: "find successful",
            data: tag
        });
    }

    // if (request.params.id) {
    //     const Tag = await Tag.findByPk(request.params.id);
    //     if (!Tag) {
    //         const data = request.params.id.split('=');
    //         const Tag = await Tag.findAll({
    //             where: { [data[0]]: { [Op.like]: data[1] } }
    //         });
    //         return response.status(200).json({
    //             success: true,
    //             message: "find successful",
    //             data: Tag
    //         });
    //     }
    //     return response.status(200).json({
    //         success: true,
    //         message: "find successful",
    //         data: Tag
    //     });
    // }

    const tag = await Tag.findAll({});
    
    if (!tag)
    return response.status(404).json({
        success: false,
        message: "id not found",
    });

    return response.status(200).json({
        success: true,
        message: "find successful",
        data: tag
    });


});
const _create = safeCall(async (request, response, _next) => {

    //validation error
    if (response.locals.errorMessage.length > 0)
        return response.status(406).json({
            success: false,
            message: response.locals.errorMessage
        });

    const createdTag = await Tag.create(request.body);

    return response.status(200).json({
        success: true,
        message: "create successful",
        data: createdTag.id
    });

});
const _update = safeCall(async (request, response, _next) => {

    //validation error
    if (response.locals.errorMessage.length > 0)
        return response.status(406).json({
            success: false,
            message: response.locals.errorMessage
        });

    const updatedTag = await Tag.update(request.body, { where: { id: request.params.id } });

    if (!updatedTag)
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

    const deletedTag = await Tag.destroy({
        where:
            { id: request.params.id }
    });

    if (!deletedTag) {
        return response.status(404).json({
            success: false,
            message: "id not found"
        });
    }

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