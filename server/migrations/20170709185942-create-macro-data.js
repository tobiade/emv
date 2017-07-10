'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('MacroData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gdp: {
        type: Sequelize.DECIMAL
      },
      gdpPerCapita: {
        type: Sequelize.DECIMAL
      },
      inflationRate: {
        type: Sequelize.DECIMAL
      },
      unemploymentRate: {
        type: Sequelize.DECIMAL
      },
      country: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
     queryInterface.dropTable('MacroData');
  }
};