const AdminModel=require('../Models/Admin')
const IdcodeServices = require("./idcode_services");
class AdminService {
    static async registerAdmin(admin_id, name, phone, time, img, email, password, date) {
        try {
            admin_id = await IdcodeServices.generateCode("Admin"); // Ensure admin_id is properly assigned
            const newAdmin = new AdminModel({ admin_id, name, phone, time, img, email, password, date });
            return await newAdmin.save();
        } catch (error) {
            throw error;
        }
    }
    static async getAdminByEmail(email) {
        try {
            return await AdminModel.findOne({ email });
        } catch (error) {
            throw error;
        }
    }

    static async getAllAdmins() {
        try {
            const admin = await AdminModel.find(); // Retrieve all users from the database
            return admin;
        } catch (error) {
            throw error;
        }
    }

    static async updateAdmin(email, name) {
        try {
            const query = { email: email };
            const update = { $set: { name: name } }; 
            return await AdminModel.updateOne(query, update);
        } catch (error) {
            throw error;
        }
    }

    static async deleteAdmin(email) {
        try {
            const deletedAdmin = await AdminModel.findOneAndDelete({ email });
            return deletedAdmin;
          } catch (error) {
            throw error;
          }
    }
}

module.exports = AdminService;