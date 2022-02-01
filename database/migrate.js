const Admin = require('./models/admin');
const Category = require('./models/category');
const Tag = require('./models/tag');
const Log = require('./models/log');


(async function(){
    try{
        await Admin.sync({ alter: true });
        await Category.sync({ alter: true });
        await Tag.sync({ alter: true });
        await Log.sync({ alter: true });

    }catch(err){
        console.log("Error connecting to database: ", err);
        process.exit(1);
    }
})()