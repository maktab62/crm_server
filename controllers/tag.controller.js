const { Op } = require('sequelize');
// trycatch field
const safeCall = require('../utils/safeCall.utils.js');
// database model
const Tag = require('../database/models/tag');
const deletePicture = require('../utils/deletePicture.utils');

const _read = safeCall(async (request, response, _next) => {

    if (request.params.id) {
        const tag = await Tag.findByPk(request.params.id, {
            include: [{
                model: Tag,
                as: 'subTag',
            }]
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

    if (request.body && Object.keys(request.body).length !== 0) {
        const tag = await Tag.findAll({
            where: { [request.body.data]: { [Op.like]: request.body.value } },
            include: [{
                model: Tag,
                as: 'subTag'
            }]
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

    const tag = await Tag.findAll({
        include: {model: Tag, as: 'subTag', required: false},
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

    const tag = await Tag.findByPk(request.params.id);

    if (request.files['smallImage'] && tag.smallImage) {
        request.body.smallImage = request.files['smallImage'][0].filename
        deletePicture(tag.smallImage);
    }
    if (request.files['bigImage'] && tag.bigImage) {
        request.body.bigImage = request.files['bigImage'][0].filename
        deletePicture(tag.bigImage);
    }
    if (request.files['bannerImage'] && tag.bannerImage) {
        request.body.bannerImage = request.files['bannerImage'][0].filename
        deletePicture(tag.bannerImage);
    }
    if (request.files['iconImage'] && tag.iconImage) {
        request.body.iconImage = request.files['iconImage'][0].filename
        deletePicture(tag.iconImage);
    }

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