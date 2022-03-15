const multer = require('multer');
const path = require('path');

function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('image is required'));
    }
}
const destination = (distanation) => {
    return (req, file, cb) => {
        cb(null, distanation)
    }
}
const filename = (foldername) => {
    return (req, file, cb) => {
        const name = `${foldername}-${Date.now()}-${file.originalname}`;
        cb(null, name)
    }
}
const fileFilter = (req, file, cb) => {
    checkFileType(file, cb);
}

const categoryStorage = multer.diskStorage({
    destination: destination(path.join(__dirname, '../public/images/category')),
    filename: filename('category')
});
const uploadCategory = multer({
    storage: categoryStorage,
    fileFilter
});
const cpUpload = uploadCategory.fields([{ name: 'smallImage', maxCount: 1 }, { name: 'bigImage', maxCount: 1 }, { name: 'bannerImage', maxCount: 1 }, { name: 'iconImage', maxCount: 1 }]);

module.exports =  cpUpload ;