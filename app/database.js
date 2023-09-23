const { Sequelize } = require('sequelize'); // On importe la classe "Sequelize" depuis le module sequelize

const client = new Sequelize(process.env.PG_URL, { // On utilise le modèle pour crée une nouvelle instance de sequelize (qui représent la connexion à la BDD)
    // on peut passer des options à notre client : 
    define: {
        underscored: true // permet de convertir les noms de tables du camelCase au snake_case
    }
});


module.exports = client;