const mongoose = require('mongoose');
const db_URI = process.env.MONGO_URL;

if(!db_URI){
    console.error('Mongo url not set in env file');
    return new Error('Mongo url not set in env file');
};

mongoose.connect(db_URI,
    {
        useNewUrlParser:true,
        useFindAndModify:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
    },
    error =>{
        if(error){
            console.log('Database Not Connected');
        }
        else{
            console.log('Database Successfully Connected');
        }
    }
);

module.exports = mongoose;