const CustomerService = require('../Services/Customerservice');


exports.registerUser = async (req, res, next) => {
    try {
        const { fname, lname, phone, time, img,email, password } = req.body;
        const user = await CustomerService.createUser(fname, lname, phone, time,img, email, password);
        res.status(201).json({ status: true, message: "User registered successfully", data: user });
    } catch (error) {
        next(error);
    }
};

exports.updateUserProfile = async (req, res, next) => {
    try {
        const { email, fname, lname, phone } = req.body;
        const updatedUser = await CustomerService.updateUserProfile(email, fname, lname, phone);
        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        res.status(200).json({ status: true, message: "User profile updated successfully", data: updatedUser });
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { email } = req.body; // Assuming email is in the request body for security
        const deletedUser = await CustomerService.deleteUser(email);
        if (!deletedUser) {
          return res.status(404).json({ status: false, message: "User not found" });
        }
        res.status(200).json({ status: true, message: "User deleted successfully", data: deletedUser });
      } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ status: false, message: "Error deleting user" });
      }
};
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await CustomerService.getAllUsers();
        res.status(200).json({ status: true, message: "All users retrieved successfully", data: users });
    } catch (error) {
        next(error);
    }
};
exports.getUserByEmail = async (req, res, next) => {
    try {
        const { email } = req.query;
        const user = await CustomerService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        delete user.password;
        res.status(200).json({ status: true, message: "User retrieved successfully", data: user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ status: false, message: "Error retrieving user" });
    }
};
