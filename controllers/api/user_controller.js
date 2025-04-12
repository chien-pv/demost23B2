const User = require("../../model/user");

class UserController {
    static async getUsers(req, res) {
        const users = await User.find();
        res.json({
            message: "Users fetched successfully",
            data: users
        });
    }
}
module.exports = UserController;
