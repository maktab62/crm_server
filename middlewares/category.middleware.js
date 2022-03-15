const validator = require('../utils/CategoryValidator.utils');
const wrapper = (mod) => {
    return CaValidation = async (req, res, next) => {
        try {
            res.locals.errorMessage = [];
            if (mod === "create") {
                validator.nameValidator(req, res)
                validator.linkToPageValidator(req, res)
            }
            if (mod === "update") {
                if (req.body.name) {
                    validator.nameValidator(req, res)
                }
                if (req.body.linkToPage) {
                    validator.linkToPageValidator(req, res)
                }
            }
            validator.statusValidator(req, res)
            validator.priorityValidator(req, res)
            validator.setMenuValidator(req, res)
            validator.setIndexValidator(req, res)
            validator.colorValidator(req, res)
            validator.metaTitleValidator(req, res)
            validator.metaKeywordsValidator(req, res)
            validator.metaDescriptionValidator(req, res)
            validator.smallImageValidator(req, res)
            validator.bannerImageValidator(req, res)
            validator.iconImageValidator(req, res)
            validator.bigImageValidator(req, res)
            next()
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    }
}

module.exports = wrapper;