const SaveService = require('../Services/SaveService');

exports.registerSave = async (req, res, next) => {
    try {
        const { user_id, dis_name, desc, solution, img } = req.body;
        const save = await SaveService.registerSave(user_id, dis_name, desc, solution, img);
        res.status(201).json({ status: true, message: "Save registered successfully", data: save });
    } catch (error) {
        next(error);
    }
};

exports.getSaveByUserID = async (req, res, next) => {
    try {
        const { user_id } = req.query;
        const save = await SaveService.getSaveByUserID(user_id);
        res.status(200).json({ status: true, message: "Save retrieved successfully", data: save });
    } catch (error) {
        next(error);
    }
};

exports.getAllSavesByUserID = async (req, res, next) => {
    try {
        const { user_id } = req.query;
        const saves = await SaveService.getAllSavesByUserID(user_id);
        res.status(200).json({ status: true, message: "All saves retrieved successfully", data: saves });
    } catch (error) {
        next(error);
    }
};

exports.deleteSave = async (req, res, next) => {
    try {
        const { objectId } = req.body;
        const deletedSave = await SaveService.deleteSave(objectId);
        if (!deletedSave) {
            return res.status(404).json({ status: false, message: "Save not found" });
        }
        res.status(200).json({ status: true, message: "Save deleted successfully", data: deletedSave });
    } catch (error) {
        next(error);
    }
};
