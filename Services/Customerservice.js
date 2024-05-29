const UserModel = require('../Models/Customer');
const IdcodeServices = require("./idcode_services");

class CustomerService {
    static async createUser(fname, lname, phone, time, email, img, password, date) {
        try {
            const user_id = await IdcodeServices.generateCode("Customer");
            const newUser = new UserModel({ user_id, fname, lname, phone, time, email, img, password, date });
            return await newUser.save();
        } catch (error) {
            throw new Error("Error creating user: " + error.message);
        }
    }

    static async getUserByEmail(email) {
        try {
            const user = await UserModel.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async updateUserProfile(email, fname, lname, phone) {
        try {
            const query = { email: email };
            const values = { $set: { fname, lname, phone } };
            return await UserModel.updateOne(query, values);
        } catch (error) {
            throw error;
        }
    }

    static async updateUserImage(email, img) {
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const oldImage = user.img;
            const updatedUser = await UserModel.findOneAndUpdate(
                { email },
                { $set: { img } },
                { new: true }
            );
            return { updatedUser, oldImage };
        } catch (error) {
            throw error;
        }
    }
    

    static async deleteUser(email) {
        try {
            const deletedUser = await UserModel.findOneAndDelete({ email });
            return deletedUser;
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            const users = await UserModel.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    static async loginUser(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CustomerService;
