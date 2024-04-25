const DiseaseModel=require('../Models/Disease')
class DiseaseService {
    static async registerDisease(disname,desc,solution) {
        try {
            const newDisease = new DiseaseModel({ disname,desc,solution});
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

    static async updateDisease(disname) {
        try {
            var query = {disname:disname};
            var values = {$set: {disname,desc,solution}};

            return await DiseaseModel.updateOne(query,values);
        } catch (error) {
            throw error;
        }
    }

    static async deleteDisease(disname) {
        try {
            return await DiseaseModel.findOneAndDelete({ disname });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DiseaseService;