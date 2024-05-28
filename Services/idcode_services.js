const IdcodeModel = require("../Models/idcode_model");

class IdcodeServices{
    static async getCode(idname){
        try{
            return await IdcodeModel.findOne({idname});
        }catch(error){
            throw error;
        }
    }
    static async updateCode(idname,codes){
        try{
            var query = { idname: idname }; 
            var values = { $set: { codes: codes} };
            return await IdcodeModel.updateOne(query,values);
        }catch(error){
            throw error;
        }
    }
    static async generateCode(idname){
        try{
             var id="";
             var { idcode, codes} = await this.getCode(idname);
             codes = codes+1;
             if(codes<10){
                id = idcode+"00"+codes;
             }else if(codes<100){
                id = idcode+"0"+codes;
             }else{
                id = idcode+codes;
             }
             console.log(id);
             this.updateCode(idname,codes)
             return id;
        }catch(error){
            console.log(error);
        }

    }
}
module.exports = IdcodeServices;