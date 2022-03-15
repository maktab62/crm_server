const fs = require('fs');
const { join } = require('path');
const deletePicture = (picture) => {
    fs.unlinkSync(join(__dirname, '../public/images/category', picture));
};
module.exports = deletePicture;