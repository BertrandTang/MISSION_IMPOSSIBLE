const express = require("express"); // On require la express
const router = express.Router(); // On utilise le module Router d'Express

const mainController = require("./controllers/mainController.js");
const agentController = require("./controllers/agentController.js");
const authMiddleware = require("./middleware/authMiddleware.js");

router.get("/", mainController.homePage);
router.get("/login", mainController.loginPage); // Page du login

router.get("/loggedin", authMiddleware, mainController.loggedinPage);
router.get("/access-denied", mainController.accessDeniedPage);

router.get("/signup", mainController.signUpPage); // Page d'inscription
// router.post('/signup', agentController.signingUp); // Inscription

router.get("/loggedout", mainController.loggedoutPage);
router.get("/loggedout", agentController.logout); // Déconnexion & page "vous êtes déconnecté"

router.post("/login", agentController.login); // Authentification
module.exports = router;
