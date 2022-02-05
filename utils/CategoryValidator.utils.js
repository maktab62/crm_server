const statusValidator = (req, res) => {
    if (req.body.status && typeof req.body.status !== 'boolean')
        res.locals.errorMessage.push("status should be 0 or 1");
};
const priorityValidator = (req, res) => {
    if (req.body.priority) {
        if (typeof req.body.priority !== 'number')
            res.locals.errorMessage.push("priority should be number");
    }
};
const setMenuValidator = (req, res) => {
    if (req.body.setMenu) {
        if (typeof req.body.setMenu !== 'boolean')
            res.locals.errorMessage.push("setMenu should 0 or 1");
    }
};
const setIndexValidator = (req, res) => {
    if (req.body.setIndex) {
        if (typeof req.body.setIndex !== 'boolean')
            res.locals.errorMessage.push("setIndex should true or false");
    }
};
const nameValidator = (req, res) => {
    if (!req.body.name || req.body.name.trim().length < 2 || req.body.name.trim().length > 100)
        res.locals.errorMessage.push("name is required and should be more than 2 characters, less than 100 characters");
};
const linkToPageValidator = (req, res) => {
    if (!req.body.linkToPage || req.body.linkToPage.trim().length < 2 || req.body.linkToPage.trim().length > 300)
        res.locals.errorMessage.push("linkToPage is required and should be more than 2 characters, less than 300 characters");
};
const colorValidator = (req, res) => {
    if (req.body.color) {
        if (req.body.color.trim().length > 50)
            res.locals.errorMessage.push("color should be string less than 50 characters");
    }
};
const metaTitleValidator = (req, res) => {
    if (req.body.metaTitle) {
        if (req.body.metaTitle.trim().length > 50)
            res.locals.errorMessage.push("metaTitle should be string less than 50 characters");
    }
};
const metaKeywordsValidator = (req, res) => {
    if (req.body.metaKeywords) {
        if (req.body.metaKeywords.trim().length > 255)
            res.locals.errorMessage.push("metaKeywords should be string less than 255 characters");
    }
};
const metaDescriptionValidator = (req, res) => {
    if (req.body.metaDescription) {
        if (req.body.metaDescription.length > 255)
            res.locals.errorMessage.push("metaDescription should be string less than 255 characters");
    }
};
const smallImageValidator = (req, res) => {
    if (req.body.smallImage) {
        if (req.body.smallImage.trim().length > 255) {
            res.locals.errorMessage.push("smallImage should be string less than 255 characters");
        }
    }
};
const bannerImageValidator = (req, res) => {
    if (req.body.bannerImage) {
        if (req.body.bannerImage.length > 255)
            res.locals.errorMessage.push("bannerImage should be string less than 255 characters");
    }
};
const iconImageValidator = (req, res) => {
    if (req.body.iconImage) {
        if (req.body.iconImage.trim().length > 255)
            res.locals.errorMessage.push("iconImage should be string less than 255 characters");
    }
};
const bigImageValidator = (req, res) => {
    if (req.body.bigImage) {
        if (req.body.bigImage.trim().length > 255)
            res.locals.errorMessage.push("bigImage should be string less than 255 characters");
    }
};
module.exports = {
    statusValidator,
    priorityValidator,
    setMenuValidator,
    setIndexValidator,
    nameValidator,
    linkToPageValidator,
    colorValidator,
    metaTitleValidator,
    metaKeywordsValidator,
    metaDescriptionValidator,
    smallImageValidator,
    bannerImageValidator,
    iconImageValidator,
    bigImageValidator
}
