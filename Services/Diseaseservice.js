const DiseaseModel=require('../Models/Disease')
const IdcodeServices = require("./idcode_services");
class DiseaseService {
    static async registerDisease(disname,desc,solution) {
        try {
            var dis_id = await IdcodeServices.generateCode("Disease");
            var user_id= await IdcodeServices.generateCode("Disease"); 
            const newDisease = new DiseaseModel({dis_id,disname,desc,solution,user_id});
            return await newDisease.save();
        } catch (error) {
            throw error;
        }
    }

    static async getDiseaseByName(disname) {
        try {
            return await DiseaseModel.findOne({ disname });
        } catch (error) {
            throw error;
        }
    }

    static async getAllDisease() {
        try {
            return await DiseaseModel.find({});
        } catch (error) {
            throw error;
        }
    }

    static async updateDisease(dis_id,disname, desc, solution) {
        try {
            const query = { dis_id: dis_id };//disid
            const update = { desc, solution,disname };//disname

            return await DiseaseModel.updateOne(query, update);
        } catch (error) {
            throw error;
        }
    }


    static async deleteDisease(disname) {
        try {
            const deletedDisease = await DiseaseModel.findOneAndDelete({ disname });
            return deletedDisease;
          } catch (error) {
            throw error;
          }
    }
}

module.exports = DiseaseService;