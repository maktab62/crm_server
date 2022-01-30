//Category Validation for create 
const createCategoryValidator = (req, res, next) => {
    try {
        //local variables for error messages
        res.locals = {
            error: false,
            errorMessage: []
        };
        if (req.body.status) {
            let { status } = req.body;
            status = status.trim();
            if (typeof status !== 'boolean') {
                res.locals.error = true;
                res.locals.errorMessage.push("status should be 0 or 1");
            }
        }
        if (req.body.priority) {
            let { priority } = req.body;
            priority = priority.trim();
            if (typeof priority !== 'number') {
                res.locals.error = true;
                res.locals.errorMessage.push("priority should number");
            }
        }
        if (req.body.setMenu) {
            let { setMenu } = req.body;
            setMenu = setMenu.trim();
            if (typeof setMenu !== 'boolean') {
                res.locals.error = true;
                res.locals.errorMessage.push("setMenu should 0 or 1");
            }
        }
        if (req.body.setIndex) {
            let { setIndex } = req.body;
            setIndex = setIndex.trim();
            if (typeof setIndex !== 'boolean') {
                res.locals.error = true;
                res.locals.errorMessage.push("setIndex should true or false");
            }
        }
        if (!req.body.name || typeof req.body.name !== 'string') {
            res.locals.error = true;
            res.locals.errorMessage.push("name is required and should be more than 2 characters, less than 100 characters");
        }
        else {
            let { name } = req.body;
            name = name.trim();
            if (name.length < 2 || name.length > 100 || name === "") {
                res.locals.error = true;
                res.locals.errorMessage.push("name is required and should be more than 2 characters, less than 100 characters");
            }
        }
        if (!req.body.linkToPage || typeof req.body.linkToPage !== 'string') {
            res.locals.error = true;
            res.locals.errorMessage.push("linkToPage is required and should be more than 2 characters, less than 300 characters");
        }
        else {
            let { linkToPage } = req.body;
            linkToPage = linkToPage.trim();
            if (linkToPage.length < 2 || linkToPage.length > 300 || linkToPage === "") {
                res.locals.error = true;
                res.locals.errorMessage.push("linkToPage is required and should be more than 2 characters, less than 300 characters");
            }
        }
        if (req.body.color) {
            let { color } = req.body;
            color = color.trim();
            if (typeof color !== 'string' || color.length > 50) {
                res.locals.error = true;
                res.locals.errorMessage.push("color should be string less than 50 characters");
            }
        }
        if (req.body.metaTitle) {
            let { metaTitle } = req.body;
            metaTitle = metaTitle.trim();
            if (typeof metaTitle !== 'string' || metaTitle.length > 50) {
                res.locals.error = true;
                res.locals.errorMessage.push("metaTitle should be string less than 50 characters");
            }
        }
        if (req.body.metaKeywords) {
            let { metaKeywords } = req.body;
            metaKeywords = metaKeywords.trim();
            if (typeof metaKeywords !== 'string' || metaKeywords.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("metaKeywords should be string less than 255 characters");
            }
        }
        if (req.body.metaDescription) {
            let { metaDescription } = req.body;
            metaDescription = metaDescription.trim();
            if (typeof metaDescription !== 'string' || metaDescription.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("metaDescription should be string less than 255 characters");
            }
        }
        if (req.body.smallImage) {
            let { smallImage } = req.body;
            smallImage = smallImage.trim();
            if (typeof smallImage !== 'string' || smallImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("smallImage should be string less than 255 characters");
            }
        }
        if (req.body.bannerImage) {
            let { bannerImage } = req.body;
            bannerImage = bannerImage.trim();
            if (typeof bannerImage !== 'string' || bannerImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("bannerImage should be string less than 255 characters");
            }
        }
        if (req.body.iconImage) {
            let { iconImage } = req.body;
            iconImage = iconImage.trim();
            if (typeof iconImage !== 'string' || iconImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("iconImage should be string less than 255 characters");
            }
        }
        if (req.body.bigImage) {
            let { bigImage } = req.body;
            bigImage = bigImage.trim();
            if (typeof bigImage !== 'string' || bigImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("bigImage should be string less than 255 characters");
            }
        }
        if (!req.body.body || typeof req.body.body !== 'string') {
            res.locals.error = true;
            res.locals.errorMessage.push("body is required");
        }
        else {
            let { body } = req.body;
            body = body.trim();
            if (body === "") {
                res.locals.error = true;
                res.locals.errorMessage.push("body is required");
            }
        }

        next();
    } catch (error) {
        res.status(500).json({ success: false, message: error, data: null });
    }
};
//Category Validation for update
const updateCategoryValidator = (req, res, next) => {
    try {
        res.locals = {
            error: false,
            errorMessage: []
        };
        if (req.body.status) {
            let { status } = req.body;
            status = status.trim();
            if (typeof status !== 'boolean') {
                res.locals.error = true;
                res.locals.errorMessage.push("status should be 0 or 1");
            }
        }
        if (req.body.priority) {
            let { priority } = req.body;
            priority = priority.trim();
            if (typeof priority !== 'number') {
                res.locals.error = true;
                res.locals.errorMessage.push("priority should number");
            }
        }
        if (req.body.setMenu) {
            let { setMenu } = req.body;
            setMenu = setMenu.trim();
            if (typeof setMenu !== 'boolean') {
                res.locals.error = true;
                res.locals.errorMessage.push("setMenu should 0 or 1");
            }
        }
        if (req.body.setIndex) {
            let { setIndex } = req.body;
            setIndex = setIndex.trim();
            if (typeof setIndex !== 'boolean') {
                res.locals.error = true;
                res.locals.errorMessage.push("setIndex should true or false");
            }
        }
        if (req.body.name) {
            let { name } = req.body;
            name = name.trim();
            if (!name || typeof name !== 'string' || name.length < 2 || name.length > 100 || name === "") {
                res.locals.error = true;
                res.locals.errorMessage.push("name is required and should be more than 2 characters, less than 100 characters");
            }
        }
        if (req.body.linkToPage) {
            let { linkToPage } = req.body;
            linkToPage = linkToPage.trim();
            if (!linkToPage || typeof linkToPage !== 'string' || linkToPage.length < 2 || linkToPage.length > 300 || name === "") {
                res.locals.error = true;
                res.locals.errorMessage.push("linkToPage is required and should be more than 2 characters, less than 300 characters");
            }
        }

        if (req.body.color) {
            let { color } = req.body;
            color = color.trim();
            if (typeof color !== 'string' || color.length > 50) {
                res.locals.error = true;
                res.locals.errorMessage.push("color should be string less than 50 characters");
            }
        }
        if (req.body.metaTitle) {
            let { metaTitle } = req.body;
            metaTitle = metaTitle.trim();
            if (typeof metaTitle !== 'string' || metaTitle.length > 50) {
                res.locals.error = true;
                res.locals.errorMessage.push("metaTitle should be string less than 50 characters");
            }
        }
        if (req.body.metaKeywords) {
            let { metaKeywords } = req.body;
            metaKeywords = metaKeywords.trim();
            if (typeof metaKeywords !== 'string' || metaKeywords.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("metaKeywords should be string less than 255 characters");
            }
        }
        if (req.body.metaDescription) {
            let { metaDescription } = req.body;
            metaDescription = metaDescription.trim();
            if (typeof metaDescription !== 'string' || metaDescription.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("metaDescription should be string less than 255 characters");
            }
        }
        if (req.body.smallImage) {
            let { smallImage } = req.body;
            smallImage = smallImage.trim();
            if (typeof smallImage !== 'string' || smallImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("smallImage should be string less than 255 characters");
            }
        }
        if (req.body.bannerImage) {
            let { bannerImage } = req.body;
            bannerImage = bannerImage.trim();
            if (typeof bannerImage !== 'string' || bannerImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("bannerImage should be string less than 255 characters");
            }
        }
        if (req.body.iconImage) {
            let { iconImage } = req.body;
            iconImage = iconImage.trim();
            if (typeof iconImage !== 'string' || iconImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("iconImage should be string less than 255 characters");
            }
        }
        if (req.body.bigImage) {
            let { bigImage } = req.body;
            bigImage = bigImage.trim();
            if (typeof bigImage !== 'string' || bigImage.length > 255) {
                res.locals.error = true;
                res.locals.errorMessage.push("bigImage should be string less than 255 characters");
            }
        }
        if (req.body.body) {
            let { body } = req.body;
            body = body.trim();
            if (!body || typeof body !== 'string' || body === "") {
                res.locals.error = true;
                res.locals.errorMessage.push("body is required");
            }
        }
        next()
    } catch (error) {
        res.status(500).json({ success: false, message: error, data: null });
    }
};
module.exports = { createCategoryValidator, updateCategoryValidator };