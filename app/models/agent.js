

const { DataTypes, Model } = require('sequelize');
const client = require('../database');

// on déclare la classe agent qui a pour parent Model, qui est un modèle de sequelize
// Model contient tout un tas de méthodes et vérifications qui nous seront utiles
class Agent extends Model {}


// on appelle la méthode init de la classe Agent pour définir les champs qui composent notre modèle ET la manière dont on va se connecter au client, ainsi que la BDD concernée
Agent.init({

    username: DataTypes.STRING,
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },

}, {
    sequelize: client,
    tableName: 'agent' // table de la BDD concernée
})


module.exports = Agent;