const Admin = require("../database/models/admin");
const bcrypt = require("bcryptjs");

const getAllAdmins = async(req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        console.log(error);
    }
};

const findAdminById = async(req, res) => {
    try {
        const targetAdmin = await Admin.findOne({
            where: { id: req.params.id },
        });

        if (!targetAdmin) {
            return res.status(404).json({ msg: "Admin not found" });
        }

        return res.json(targetAdmin);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

const createAdmin = async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        console.log("hashed ps: " + hashedPassword);

        const newAdmin = await Admin.create({
            status: req.body.status,
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            family: req.body.family,
            email: req.body.email,
            mobile: req.body.mobile,
            image: req.body.image,
            body: req.body.body,
        });

        res.json(newAdmin);
    } catch (error) {
        console.log(error);
    }
};

const updateAdmin = async(req, res) => {
    try {
        const targetAdmin = await Admin.findOne({ where: { id: req.params.id } });

        if (!targetAdmin) {
            return res.status(404).send({ msg: "Admin not found!" });
        }

        await targetAdmin.update(req.body);
        res.json(targetAdmin);
    } catch (error) {
        console.log(error);
    }
};

const deleteAdmin = async(req, res) => {
    try {
        const targetAdmin = await Admin.findOne({ where: { id: req.params.id } });

        if (!targetAdmin) {
            return res.status(404).send({ msg: "Admin not found!" });
        }

        await targetAdmin.destroy();

        return res.json({ msg: `Admin with Id: ${req.params.id} deleted!` });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllAdmins,
    findAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
};