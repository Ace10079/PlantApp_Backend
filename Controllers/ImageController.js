const ImageService = require('../Services/ImageService');

exports.registerImage = async (req, res, next) => {
    try {
        const { user_id, dis_id, email } = req.body;
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ status: false, message: "No file uploaded" });
        }
        const date = new Date();
        const time = date.toTimeString();
        const image = await ImageService.registerImage(user_id, dis_id, time, req.file.filename, email, date);
        res.status(201).json({ status: true, message: "Image registered successfully", data: image });
    } catch (error) {
        next(error);
    }
};
exports.updateImage = async (req, res, next) => {
    try {
        const { user_id,dis_id,date,time } = req.body; // Assuming email is passed as a parameter
        const updatedUser = await ImageService.updateImage(user_id,dis_id,date,time);
        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "Image not found" });
        }
        res.status(200).json({ status: true, message: "Image updated successfully", data: updatedUser });
    } catch (error) {
        next(error);
    }
};

exports.deleteImage = async (req, res, next) => {
    try {
        const { user_id } = req.body;
        const deletedImage = await ImageService.deleteImage(user_id);
        if (!deletedImage) {
          return res.status(404).json({ status: false, message: "Image not found" });
        }
        res.status(200).json({ status: true, message: "Image deleted successfully", data: deletedImage });
      } catch (error) {
        console.error(error.message); 
        res.status(500).json({ status: false, message: "Error deleting Image" });
      }
};
exports.getAllImage = async (req, res, next) => {
    try {
        const users = await ImageService.getAllImage();
        res.status(200).json({ status: true, message: "All Images retrieved successfully", data: users });
    } catch (error) {
        next(error);
    }
};
exports.getImageByName = async (req, res, next) => {
    try {
        const {user_id} = req.query;
        const user = await ImageService.getImageByName(user_id);
        res.status(200).json({ status: true, message: "Image retrieved successfully", data: user });
    } catch (error) {
        next(error);
    }
};
