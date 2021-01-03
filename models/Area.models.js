const mongoose = require('mongoose');
const { Schema } = mongoose;

const areaSchema = new Schema({
    villageName:{
        type:String,
        trim:true
    },
    districtName:{
        type:String,
        trim:true
    },
    division:{
        type:String,
        trim:true
    },
},{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model('Area', areaSchema);