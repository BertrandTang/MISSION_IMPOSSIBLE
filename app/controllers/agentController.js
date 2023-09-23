const bcrypt = require("bcrypt");
const Agent = require("../models/agent");

const agentController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // On récupère l'agent avec le bon username
      const agentFound = await Agent.findOne({
        where: {
          username: username,
        },
      });

      // On vérifie que l'agent existe
      // Si on ne le trouve pas :
      // on envoie un message d'erreur dans un objet:  {error: "Agent ou mot de passe incorrect"} et on render `login` en lui passant l'erreur
      // Sinon on continue.
      if (!agentFound) {
        const error = "Agent ou mot de passe incorrect";
        return res.render("login", { error }); // Cette ligne permet de "réinitialiser" le formulaire en déclenchant un reload de la page
      }
      // on vérifie que le mdp est correct
      // On compare le mots de passe du formulaire avec celui de l'agent
      const isPasswordValid = await bcrypt.compare(
        password,
        agentFound.password
      );

      // Si le mot de passe est incorrect : on envoie un message d'erreur dans un objet:  {error: "Agent ou mot de passe incorrect"} et on render `login` en lui passant l'erreur
      if (!isPasswordValid) {
        const error = "Agent ou mot de passe incorrect";
        return res.render("login", { error });
      }

      // On enlève le mot de passe de la session.
      delete agentFound.password;

      // On ajoute user a la session
      req.session.agent = agentFound;

      // On redirige vers la page /loggedin
      res.redirect("/loggedin");
    } catch (error) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  },

  logout: (req, res) => {
    try {
      // Il faut supprimer l'agent de la session
      delete req.session.agent;

      // Redirigez l'utilisateur vers la page de connexion (ou une autre page de votre choix)
      res.redirect("/loggedout");
      
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = agentController;
