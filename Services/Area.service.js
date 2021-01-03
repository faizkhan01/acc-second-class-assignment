const Area = require('../models/Area.models');

const areaService = {};

//post Data
areaService.postData = area => {
 return Area.create(area);
};

//get All Data
areaService.getAllData = () => {
    return Area.find();
};

//get By Id
areaService.getById = id => {
    return Area.findById({_id:id});
}

//patch By Id
areaService.patchById = reqBody => {
    const id = reqBody.id;
    return Area.findByIdAndUpdate( id, reqBody, {new:true});
};

//put By Id
areaService.putById = reqBody => {
    const id = reqBody.id;
    return Area.findOneAndReplace( {_id:id}, reqBody, {new:true});
};


//delete By Id
areaService.deleteById = reqBody => {
    const id = reqBody.id;
    return Area.findByIdAndDelete( id);
};

module.exports = areaService;