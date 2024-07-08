const ImageModel=require('../Models/Image')
const IdcodeServices = require("./idcode_services");
class ImageService {
    static async registerImage(user_id, dis_id, time, img, email, date) {
        try {
            const Image_id = await IdcodeServices.generateCode("Image");
            const newImage = new ImageModel({ Image_id, user_id, dis_id, time, img, email, date });
            return await newImage.save();
        } catch (error) {
            throw error;
        }
    }

    static async getImageByName(user_id) {
        try {
            return await ImageModel.find({user_id });
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

    static async updateImage(name,dis_id,date,time) {
        try {
            var query = {name:name};
            var values = {$set: {dis_id,date,time}};

            return await ImageModel.updateOne(query,values);
        } catch (error) {
            throw error;
        }
    }

    static async deleteImage(user_id) {
        try {
            const deletedImage = await ImageModel.findOneAndDelete({ user_id });
            return deletedImage;
          } catch (error) {
            throw error;
          }
    }
}

module.exports = ImageService;