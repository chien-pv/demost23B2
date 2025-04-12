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
}

module.exports = UserController;
