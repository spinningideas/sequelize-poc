'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('country', {
      countryId: {
        field: 'country_id',
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      countryName: {
        field: 'country_name',
        type: Sequelize.STRING(100),
        unique: true
      },
      countryCode: {
        field: 'country_code',
        type: Sequelize.STRING(2)
      },
      countryCode3: {
        field: 'country_code3',
        type: Sequelize.STRING(3)
      },
      capital: {
        field: 'capital',
        type: Sequelize.STRING(100)
      },
      continentCode: {
        field: 'continent_code',
        type: Sequelize.STRING(2)
      },
      area: {
        field: 'area',
        type: Sequelize.INTEGER
      },
      population: {
        field: 'population',
        type: Sequelize.INTEGER
      },
      latitude: {
        field: 'latitude',
        type: Sequelize.DECIMAL(10, 6)
      },
      longitude: {
        field: 'longitude',
        type: Sequelize.DECIMAL(10, 6)
      },
      currencyCode: {
        field: 'currency_code',
        type: Sequelize.STRING(3)
      },
      currencyName: {
        field: 'currency_name',
        type: Sequelize.STRING(50)
      },
      languages: {
        field: 'languages',
        type: Sequelize.STRING(255)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('country');
  }
};
