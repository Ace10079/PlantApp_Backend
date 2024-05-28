const IdcodeServices = require("../Services/idcode_services");

exports.idcode= async(req, res, next)=>{
    try{
        const{idname} = req.body;
        const successRes = await IdcodeServices.generateCode(idname);
        res.json({status: true, idcode: successRes});

    }catch(error){
        res.json({status: false, success: error});
    }
}