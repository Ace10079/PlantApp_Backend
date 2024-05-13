const CustomerService = require('../Services/Customerservice');
const bcrypt = require('bcryptjs');
exports.registerUser = async (req, res, next) => {
    try {
      const { fname, lname, phone, email, img, password } = req.body;
      const date = new Date(); // Current date and time
      const time = date.toTimeString(); // Extracting time from the date
  
      const user = await CustomerService.createUser(fname, lname, phone, time, date, email, img, password);
      res.status(201).json({ status: true, message: "User registered successfully", data: user });
    } catch (error) {
      next(error);
    }
  };
exports.updateUserImage = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (!req.file) {
            return res.status(400).json({ status: false, message: "No image uploaded" });
        }

        const imgPath = req.file.path;
        const updatedUser = await CustomerService.updateUserImage(email, imgPath);
        
        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        res.status(200).json({ status: true, message: "User image updated successfully", data: updatedUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ status: false, message: "Error updating user image" });
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
        const { email } = req.body;
        const deletedUser = await CustomerService.deleteUser(email);
        if (!deletedUser) {
          return res.status(404).json({ status: false, message: "User not found" });
        }
        res.status(200).json({ status: true, message: "User deleted successfully", data: deletedUser });
      } catch (error) {
        console.error(error.message); 
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
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const Customer = await CustomerService.loginUser(email, password);
        if (!Customer) {
           return res.status(401).json({ message: 'Customer not found' })
        }
        const isMatchCustomer = await bcrypt.compare(password,Customer.password);

        if (!isMatchCustomer) {
           return res.status(401).json({ message: 'Invalid Password' })
        }
       return  res.status(200).json(Customer);
    } catch (error) {
       next(error);
        
    }
}