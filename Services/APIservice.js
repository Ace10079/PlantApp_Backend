const APIModel = require('../Models/API');

class APIService {
    static async registerAPI(api_id, link) {
        try {
            const newAPI = new APIModel({ api_id, link });
            return await newAPI.save();
        } catch (error) {
            throw error;
        }
    }

    static async updateAPI(api_id, newLink) {
        try {
            const updatedAPI = await APIModel.findOneAndUpdate(
                { api_id },
                { link: newLink },
                { new: true }
            );
            return updatedAPI;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = APIService;
