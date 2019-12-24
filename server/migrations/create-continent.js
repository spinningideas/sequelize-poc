'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('continent', {
			continentId: {
				field: 'continent_id',
				allowNull: false,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4,
				type: Sequelize.UUID
			},
			continentCode: {
				field: 'continent_code',
				type: Sequelize.STRING(2),
				unique:true
			},
			continentName: {
				field: 'continent_name',
				type: Sequelize.STRING(50),
				unique:true
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('continent');
	}
};
