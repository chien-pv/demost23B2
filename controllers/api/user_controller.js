const User = require("../../model/user");

class UserController {
    static async getUsers(req, res) {
        const users = await User.find();
        res.json({
            message: "Users fetched successfully",
            data: users
        });
    }
    static async getUserById(req, res) {
        let id = req.params.id
        const user = await User.find({
            _id: id
        });
        res.json({
            message: "Users fetched successfully",
            data: user
        });
    }   

    static async saveUser(req, res) { 
        let { name, email, gender, phone } = req.body;
        try {
            let user = await User.create({ name, email, gender, phone });
            res.status(200).json({
                message: "User saved successfully",
                data: user
            });
        } catch (error) {
            res.status(500).json({
                message: "User not saved",
                error: error.message
            });
        }
    }

    static async updateUser(req, res) {
        let id = req.params.id;
        let { name, email, gender, phone } = req.body;
        try {
            let user = await User.findByIdAndUpdate(id, { name, email, gender, phone });
            let updatedUser = await User.findById(id);
            res.json({
                message: "User updated successfully",
                data: updatedUser
            });
        } catch (error) {
            res.status(500).json({
                message: "User not updated",
                error: error.message
            });
        }
    }

    static async deleteUser(req, res) {
        try {
            let id = req.params.id;
            await User.findByIdAndDelete(id);
            res.json({
                message: "User deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: "User not deleted",
                error: error.message
            });
        }
    }
}

module.exports = UserController;
