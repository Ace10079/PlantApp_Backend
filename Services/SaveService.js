const SaveModel = require('../Models/Save');

class SaveService {
    static async registerSave(user_id, dis_name, desc, solution, img) {
        try {
            const newSave = new SaveModel({ user_id, dis_name, desc, solution, img });
            return await newSave.save();
        } catch (error) {
            throw error;
        }
    }

    static async getSaveByUserID(user_id) {
        try {
            return await SaveModel.findOne({ user_id });
        } catch (error) {
            throw error;
        }
    }

    static async getAllSavesByUserID(user_id) {
        try {
            return await SaveModel.find({ user_id });
        } catch (error) {
            throw error;
        }
    }

    static async deleteSave(objectId) {
        try {
            const deletedSave = await SaveModel.findByIdAndDelete(objectId);
            return deletedSave;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SaveService;
