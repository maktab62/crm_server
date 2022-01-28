const Category = require('../database/models/category');
const readCategory = async (_request, response, _next) => {
    try {
        const category = await Category.findAll({});
        return response.status(200).json({ success: true, message: "find successful", data: category });
    } catch (error) {
        return response.status(500).json({ success: false, message: error, data: null });
    }
};
const createCategory = async (request, response, _next) => {
    try {
        if (response.locals.error) {
            return response.status(406).json({ success: false, message: response.locals.errorMessage, data: null });
        }
        const createdCategory = await Category.create(request.body);
        response.status(200).json({ success: true, message: "create successful", data: createdCategory });
    } catch (error) {
        return response.status(500).json({ success: false, message: error, data: null });
    }
};
const updateCategory = async (request, response, _next) => {
    try {
        if (response.locals.error) {
            return response.status(406).json({ success: false, message: response.locals.errorMessage, data: null });
        }
        const updatedCategory = await Category.update(request.body, { where: { id: request.body.id } });

        if (!updatedCategory) return response.status(404).json({ success: false, message: "id not found", data: null });

        return response.status(200).json({ success: true, message: "updated successful", data: updatedCategory });
    } catch (error) {
        return response.status(500).json({ success: false, message: error, data: null });
    }
};
const deleteCategory = async (request, response, _next) => {
    try {
        // delete Category will set status to 0
        await Category.update({ status: 0 }, {
            where:
                { id: request.body.id }
        });
        return response.status(200).json({ success: true, message: "deleted successful", data: null });
    } catch (error) {
        return response.status(500).json({ success: false, message: error, data: null });
    }
};
module.exports = { readCategory, createCategory, updateCategory, deleteCategory };