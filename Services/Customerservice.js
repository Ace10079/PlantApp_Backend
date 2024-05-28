const UserModel = require('../Models/Customer');
const IdcodeServices = require("./idcode_services");
class CustomerService {
    static async createUser(user_id,fname, lname, phone, time, date, email, img, password) {
        try {
        var user_id = await IdcodeServices.generateCode("Customer");
          const newUser = new UserModel({ user_id,fname, lname, phone, time, date, email, img, password });
          return await newUser.save();
        } catch (error) {
          throw new Error("Error creating user: " + error.message);
        }
      }

      static async getUserByEmail(email) {
        try {
            const user = await UserModel.findOne({ email }); // Query for a user with the specified email
            return user;
        } catch (error) {
            throw error;
        }
    }
  
    static async updateUserProfile(email, fname, lname, phone) {
        try {
            var query = {email: email};
            var values = {$set: {fname, lname, phone}};

            return await UserModel.updateOne(query, values);
        } catch (error) {
            throw error;
        }
    }

    static async updateUserImage(email, img) {
        try {
            var query = {email: email};
            var values = {$set: {img}};

            return await UserModel.updateOne(query, values);
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
            const users = await UserModel.find(); // Retrieve all users from the database
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
