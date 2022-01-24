const Admin = require('./models/admin');


(async function(){
    try{
        await Admin.sync({ alter: true });

    }catch(err){
        console.log("Error connecting to database: ", err);
        process.exit(1);
    }
})()