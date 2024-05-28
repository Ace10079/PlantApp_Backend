const ImageModel=require('../Models/Image')
const IdcodeServices = require("./idcode_services");
class ImageService {
    static async registerImage(Image_id,name, dis_name, time, img, email, date) {
        try {
            var Image_id = await IdcodeServices.generateCode("Image");
            const newImage = new ImageModel({Image_id, name, dis_name, time, img, email, date });
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
            const deletedImage = await ImageModel.findOneAndDelete({ name });
            return deletedImage;
          } catch (error) {
            throw error;
          }
    }
}

module.exports = ImageService;