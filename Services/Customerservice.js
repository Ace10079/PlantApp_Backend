const UserModel = require('../Models/Customer');
class CustomerService {
    static async createUser(fname, lname, phone, time, img, email, password) {
        try {
            const newUser = new UserModel({ fname, lname, phone, time, img, email, password });
            return await newUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async getUserByEmail(email) {
        try {
            var query = {email:email};
            return await UserModel.findOne(query);
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(email, fname,lname,phone) {
        try {
            var query = {email:email};
            var values = {$set: {fname,lname,phone}};

            return await UserModel.updateOne(query,values);
        } catch (error) {
            throw error;
        }
    }
    static async updateUser(email, img) {
        try {
            var query = {email:email};
            var values = {$set: {img}};

            return await UserModel.updateOne(query,values);
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(email) {
        try {
            var query = {email:email};
            return await UserModel.findOneAndDelete(query);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CustomerService;