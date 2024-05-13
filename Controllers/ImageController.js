const ImageService = require('../Services/ImageService');

exports.registerImage = async (req, res, next) => {
    try {
        const { name, dis_name, email } = req.body;
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ status: false, message: "No file uploaded" });
        }
        // Set the current date and time
        const date = new Date();
        const time = date.toTimeString();
        const image = await ImageService.registerImage(name, dis_name, time, req.file.filename, email, date);
        res.status(201).json({ status: true, message: "Image registered successfully", data: image });
    } catch (error) {
        next(error);
    }
};
exports.updateImage = async (req, res, next) => {
    try {
        const { name,dis_name,date,time } = req.body; // Assuming email is passed as a parameter
        const updatedUser = await ImageService.updateImage(name,dis_name,date,time);
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
        const { name } = req.query; // Assuming email is passed as a parameter
        const deletedData = await ImageService.deleteImage(name);
        res.status(200).json({ status: true, message: "Image deleted successfully", data: deletedData });
    } catch (error) {
        next(error);
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
        const {name} = req.query;
        const user = await ImageService.getImageByName(name);
        res.status(200).json({ status: true, message: "Image retrieved successfully", data: user });
    } catch (error) {
        next(error);
    }
};
