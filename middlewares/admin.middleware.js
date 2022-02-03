const Admin = require("../database/models/admin");

const checkValues = async(req, res, next) => {
    console.log(req.body);
    const {
        // status,
        username,
        password,
        name,
        family,
        email,
        mobile,
        image,
        body,
    } = req.body;

    // console.log(status);

    if (!username ||
        !password ||
        !name ||
        !family ||
        !email ||
        !mobile ||
        !image ||
        !body) {
        return res.status(400).send("empty input!");
    }

    if (!username.trim() ||
        !password.trim() ||
        !name.trim() ||
        !family.trim() ||
        !email.trim() ||
        !mobile.trim() ||
        !image.trim() ||
        !body.trim()
    ) {
        return res.status(400).send("Invalid input!");
    }

    if (name.length < 3) {
        return res.status(400).send("name must be grater than 3");
    }

    if (family.length < 2) {
        return res.status(400).send("family must be grater than 2");
    }

    const admin = await Admin.findOne({ where: { username: username } });

    if (admin) {
        return res.status(400).send("username must be unique");
    }

    if (!email.match(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        )) {
        return res.status(400).send("Invalid email!");
    }

    const adminMobile = await Admin.findOne({ where: { mobile: mobile } });

    if (adminMobile) {
        return res.status(400).send("mobile must be unique");
    }

    if (!mobile.match(
            /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/
        )) {
        return res.status(400).send("Invalid phone number!");
    }

    next();
};

module.exports = checkValues;