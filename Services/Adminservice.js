const AdminModel=require('../Models/Admin')
class AdminService {
    static async registerAdmin(name, phone, time, img, email, password, date) {
        try {
            const newAdmin = new AdminModel({ name, phone, time, img, email, password, date });
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
            return await AdminModel.find({});
        } catch (error) {
            throw error;
        }
    }

    static async updateAdmin(email,name) {
        try {
            var query = {email:email};
            var values = {$set: {name}};

            return await AdminModel.updateOne(query,values);
        } catch (error) {
            throw error;
        }
    }

    static async deleteAdmin(email) {
        try {
            return await AdminModel.findOneAndDelete({ email });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AdminService;