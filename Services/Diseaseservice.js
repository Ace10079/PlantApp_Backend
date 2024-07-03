const DiseaseModel=require('../Models/Disease')
const IdcodeServices = require("./idcode_services");
class DiseaseService {
    static async registerDisease( user_id,disname,desc,solution) {
        try {
            var dis_id = await IdcodeServices.generateCode("Disease");
            const newDisease = new DiseaseModel({user_id,dis_id,disname,desc,solution});
            return await newDisease.save();
        } catch (error) {
            throw error;
        }
    }

    static async getDiseaseByName(dis_id) {
        try {
            return await DiseaseModel.findOne({ dis_id });
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


    static async deleteDisease(dis_id) {
        try {
            const deletedDisease = await DiseaseModel.findOneAndDelete({ dis_id });
            return deletedDisease;
          } catch (error) {
            throw error;
          }
    }
}

module.exports = DiseaseService;