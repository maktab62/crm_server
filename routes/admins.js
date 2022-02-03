const express = require("express");
const router = express.Router();
const {
    getAllAdmins,
    findAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = require("../controllers/admin.crud.controller");
const adminMiddleware = require("../middlewares/admin.middleware");

router.get("/", getAllAdmins);

router.post("/", adminMiddleware, createAdmin);

router.patch("/:id", updateAdmin);

router.delete("/:id", deleteAdmin);

router.get("/:id", findAdminById);

module.exports = router;