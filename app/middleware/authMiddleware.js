// Faut placer ce middleware avant le controller dans la route pour authentifier la connexion
// Ça aura pour résultat de protéger la page d'un user connecté
const authMiddleware = (req, res, next) => {
  if (req.session.agent) {
    // Si l'agent est bien connecté, NEXT (dans notre cas, le middleware passe la main au controller qui va bien afficher la page)
    next();
  } else {
    // si il n'y a pas d'user dans req, on redirige l'utilisateur vers un espace non connecté
    res.redirect("/access-denied");
  }
};

module.exports = authMiddleware;
