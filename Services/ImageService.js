const ImageModel=require('../Models/Image')
class ImageService {
    static async registerImage(name, dis_name, time, img, email, date) {
        try {
            const newImage = new ImageModel({ name, dis_name, time, img, email, date });
            return await newImage.save();
        } catch (error) {
            throw error;
        }
    }

    static async getImageByName(name) {
        try {
            return await ImageModel.findOne({ name });
        } catch (error) {
            throw error;
        }
    }

    static async getAllImage() {
        try {
            return await ImageModel.find({});
        } catch (error) {
            throw error;
        }
    }

    static async updateImage(name,dis_name,date,time) {
        try {
            var query = {name:name};
            var values = {$set: {dis_name,date,time}};

            return await ImageModel.updateOne(query,values);
        } catch (error) {
            throw error;
        }
    }

    static async deleteImage(name) {
        try {
            return await ImageModel.findOneAndDelete({ name });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ImageService;