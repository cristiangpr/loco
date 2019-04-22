'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // logic for transforming into the new state
    return queryInterface.addColumn(
      'Messages',
      'notes',
     Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Messages',
      'notes',
    );
  }
};
