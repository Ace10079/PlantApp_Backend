const bcrypt = require('bcryptjs');
const AdminModel = require('../Models/Admin');
const IdcodeServices = require("./idcode_services");

class AdminService {
    static async registerAdmin(admin_id, name, phone, time, email, password, date, role) {
        try {
            admin_id = await IdcodeServices.generateCode("Admin");
            const hashedPassword = await bcrypt.hash(password, 10); 
            const newAdmin = new AdminModel({ admin_id, name, phone, time, email, password: hashedPassword, date, role });
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
            const admin = await AdminModel.find();
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

    static async validateAdmin(email, password) {
        try {
            const admin = await this.getAdminByEmail(email);
            if (!admin) {
                throw new Error('Admin not found');
            }

            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                throw new Error('Invalid credentials');
            }

            return admin; // Return the admin if validation is successful
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AdminService;
