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

    static async updateDisease(disname, desc, solution) {
        try {
            const query = { disname: disname };
            const update = { desc, solution };

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