// On charge le module "dotenv" et on appelle la méthode config
// Cela permet de charger les variables d'environnement depuis .env
// Pour rappel, l'.env stock les configurations sensibles, connexion à la BDD ou clés d'API.
require("dotenv").config();

// On importe le module express-session qui gère les sessions utilisateurs de l'app
const session = require("express-session");

const errorMiddleware = require('./app/middleware/errorMiddleware') // On défini le chemin vers notre middleware maison pour gérer les erreurs
// const path = require('path');

// On importe express évidemment, on rappelle que c'est un framework Node.js qui nous permet de créer notre app (qu'on appelle plus tard ligne 19)
const express = require("express");
// On importe notre router, rien de sorcier
const router = require("./app/router");
// On définit notre port via notre .env
const port = process.env.PORT || 3000;
// On créer l'instance d'Express qu'on va utiliser pour configurer et exécuter notre application web
const app = express();

// On utilise un middleware 'urlencoded' qui est utilisé pour analyser les données envoyées dans le corps des requêtes HTTP
// (en gros pour lire nos formulaires soumis)
app.use(express.urlencoded({ extended: true }));

// Là on configure la gestion des sessions avec Express en utilisant le module "express-session"
app.use(
  session({
    // Le secret est utilisé pour signé les cookies de session.
    // Quand un cookie est signé, ça signifie qu'il est chiffré de sorte qu'un tier ou un utilisateur ne puisse pas le modifier.
    // Le serveur vérifie ensuite l'intégrité du cookie en utilisant cette même clé secrète pour s'assurer qu'il n'a pas été altéré.
    // La valeur attendue dans ce champs c'est une chaîne de caractère suffisamment complexe et difficile à deviner pour garantir la sécurité des cookies de session.
    // La bonne pratique c'est de la définir dans notre .env plutôt qu'ici comme suit :
    // secret: "keyboard cat",
    secret: process.env.SESSION_SECRET,
    // Les deux lignes du dessous faut laisser true, on se prend pas la tête, ça permet de save ou non la session
    resave: true,
    saveUninitialized: true,
  })
);

// Là on configure notre moteur de vue EJS et on spécifie le répertoire où se trouvent nos vues
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Là c'est un middleware (express.static) qui nous permet de dire que nos fichiers statiques se trouvent dans public.
app.use(express.static("public"));

// Routeur : là où "tout" se passe
app.use(router);

app.use(errorMiddleware) // On utilise notre middleware de gestion des erreurs maison

app.listen(port, (_) => {
  console.log(`Ici c'est le http://localhost:${port} du MI6`);
});
