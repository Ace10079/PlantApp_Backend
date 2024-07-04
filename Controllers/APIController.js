const APIService = require('../Services/APIService');

exports.registerAPI = async (req, res, next) => {
    try {
        const { api_id, link } = req.body;
        const api = await APIService.registerAPI(api_id, link);
        res.status(201).json({ status: true, message: "API registered successfully", data: api });
    } catch (error) {
        next(error);
    }
};

exports.updateAPI = async (req, res, next) => {
    try {
        const { api_id, link } = req.body;
        const updatedAPI = await APIService.updateAPI(api_id, link);
        if (updatedAPI) {
            res.status(200).json({ status: true, message: "API updated successfully", data: updatedAPI });
        } else {
            res.status(404).json({ status: false, message: "API not found" });
        }
    } catch (error) {
        next(error);
    }
};
