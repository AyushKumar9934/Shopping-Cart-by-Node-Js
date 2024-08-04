const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'Cuj08745', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
