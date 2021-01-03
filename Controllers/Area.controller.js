const areaServices = require('../Services/Area.service');
const areaController = {};

//common function for all try and catch. I am try to maintain DRY Principal.
async function commonParams(res, callBackFunc){
    try {
        const area = await callBackFunc();
        return res.status(200).json(area);
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({message: 'OPPS!!! there are some problem.'});
    };
};

//post data
areaController.postData = async (req, res, next) => {
    commonParams(res, () => areaServices.postData(req.body));
};

//get All Data
areaController.getAllData = async (req, res, next) => {
    commonParams(res, () => areaServices.getAllData());
};

//get By Id
areaController.getById = async (req, res, next) => {
    commonParams(res, () => areaServices.getById(req.query.id));
};

//patch By Id
areaController.patchById = async (req, res, next) => {
    commonParams(res, () => areaServices.patchById(req.body));
};

//put By Id
areaController.putById = async (req, res, next) => {
    commonParams(res, () => areaServices.putById(req.body));
};

//delete By Id
areaController.deleteById = async (req, res, next) => {
    commonParams(res, () => areaServices.deleteById(req.body));
};

module.exports =  areaController;