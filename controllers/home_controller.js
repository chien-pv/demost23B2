const user = {
  name: "Nguyen Van A",
  email: "vana@gmail.com",
};
const User = require("../model/user");
const bcrypt = require("bcryptjs");

class HomeController {
  static index(req, res) {
    res.render("index", { user });
  }

  static about(req, res) {
    res.render("index", { user });
  }

  static login(req, res) {
    res.render("login");
  }

  static async createSession(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      if(user.password == password){
        req.session.user = user;
        res.redirect("/");
      } else {
        res.render("login");
      }
    } else {
      res.render("login");
    }
  }

  static async register(req, res) {
    res.render("register");
  }

  static async createUser(req, res) {
    let { name, email, password, password_confirmation } = req.body;
   if(name && email && password && password_confirmation){
    if(password == password_confirmation){
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt); 
      const user = await User.create({ name, email, password: hash});
      return res.redirect("/login");
    }
   }
   res.render("register");
  }
}

module.exports = HomeController;
