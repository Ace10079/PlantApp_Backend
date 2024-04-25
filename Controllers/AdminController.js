const AdminService = require('../Services/Adminservice');

exports.registerAdmin = async (req, res, next) => {
    try {
        const { name, phone, time, img, email, password, date } = req.body;
        const admin = await AdminService.registerAdmin(name, phone, time, img, email, password, date);
        res.status(201).json({ status: true, message: "Admin registered successfully", data: admin });
    } catch (error) {
        next(error);
    }
};
exports.updateAdmin = async (req, res, next) => {
    try {
        const { email,name,phone,time,date,password } = req.body; // Assuming email is passed as a parameter
        const updatedUser = await AdminService.updateAdmin(email, name,phone,time,date,password);
        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "Admin not found" });
        }
        res.status(200).json({ status: true, message: "Admin updated successfully", data: updatedUser });
    } catch (error) {
        next(error);
    }
};

exports.deleteAdmin = async (req, res, next) => {
    try {
        const { email } = req.query; // Assuming email is passed as a parameter
        const deletedData = await AdminService.deleteAdmin(email);
        res.status(200).json({ status: true, message: "Admin deleted successfully", data: deletedData });
    } catch (error) {
        next(error);
    }
};
exports.getAllAdmins = async (req, res, next) => {
    try {
        const users = await AdminService.getAllAdmins();
        res.status(200).json({ status: true, message: "All Admins retrieved successfully", data: users });
    } catch (error) {
        next(error);
    }
};
exports.getAdminByEmail = async (req, res, next) => {
    try {
        const {email} = req.query;
        const user = await AdminService.getAdminByEmail(email);
        res.status(200).json({ status: true, message: "Admin retrieved successfully", data: user });
    } catch (error) {
        next(error);
    }
};
