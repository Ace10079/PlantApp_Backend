const DiseaseService = require('../Services/Diseaseservice');

exports.registerDisease = async (req, res, next) => {
    try {
        const {  user_id,disname, desc, solution } = req.body;
        const dis = await DiseaseService.registerDisease( user_id,disname, desc, solution);
        res.status(201).json({ status: true, message: "Disease registered successfully", data: dis });
    } catch (error) {
        next(error);
    }
};

exports.updateDisease = async (req, res, next) => {
    try {
        const { dis_id,disname, desc, solution } = req.body;
        const updatedDisease = await DiseaseService.updateDisease(dis_id,disname, desc, solution);
        if (updatedDisease.nModified === 0) {
            return res.status(404).json({ status: false, message: "Disease not found" });
        }
        res.status(200).json({ status: true, message: "Disease updated successfully", data: updatedDisease });
    } catch (error) {
        next(error);
    }
};

exports.deleteDisease = async (req, res, next) => {
    try {
        const { disname } = req.body; // Assuming email is in the request body for security
        const deletedDisease = await DiseaseService.deleteDisease(disname);
        if (!deletedDisease) {
          return res.status(404).json({ status: false, message: "Disease not found" });
        }
        res.status(200).json({ status: true, message: "Disease deleted successfully", data: deletedDisease });
      } catch (error) {
        console.error(error.message); 
        res.status(500).json({ status: false, message: "Error deleting Disease" });
      }
};
exports.getAllDisease = async (req, res, next) => {
    try {
        const users = await DiseaseService.getAllDisease();
        res.status(200).json({ status: true, message: "All Diseases retrieved successfully", data: users });
    } catch (error) {
        next(error);
    }
};
exports.getDiseaseByName = async (req, res, next) => {
    try {
        const {disname} = req.query;
        const user = await DiseaseService.getDiseaseByName(disname);
        res.status(200).json({ status: true, message: "Disease retrieved successfully", data: user });
    } catch (error) {
        next(error);
    }
};
