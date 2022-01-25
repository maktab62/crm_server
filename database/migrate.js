const Admin = require('./models/admin');
const Category = require('./models/category');


(async function(){
    try{
        await Admin.sync({ alter: true });
        await Category.sync({ alter: true });

    }catch(err){
        console.log("Error connecting to database: ", err);
        process.exit(1);
    }
})()