const mongoose = require('mongoose');
const PORT =  process.env.DB;
const connectDB = async() => {
    try{
        await mongoose.connect(PORT, {
            useNewUrlParser : true,
            useUnifiedTopology :  true,
            useCreateIndex : true,
            useFindAndModify : false
        })
        console.log(` 2 : Connect to mongoDB`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
} 

module.exports = connectDB;