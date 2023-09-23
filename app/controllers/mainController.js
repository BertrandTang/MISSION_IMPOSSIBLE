const mainController = {
  homePage(req, res) {
    res.render("home");
  },

  loginPage(req, res) {
    res.render("login");
  },

  accessDeniedPage(req, res) {
    res.render("access-denied");
  },

  signUpPage(req, res) {
    res.render("signup");
  },

  loggedinPage(req, res) {
    res.render("loggedin");
  },

  loggedoutPage(req, res) {
    res.render("loggedout");
  },
};

module.exports = mainController;
