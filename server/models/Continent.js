'use strict';
module.exports = (sequelize, DataTypes) => {
	const Continent = sequelize.define(
		'Continent',
		{
			continentId: {
				field: 'continent_id',
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
				type: DataTypes.UUID
			},
			continentCode: {
				field: 'continent_code',
				type: DataTypes.STRING(2),
				unique: true
			},
			continentName: {
				field: 'continent_name',
				type: DataTypes.STRING(50),
				unique: true
			}
		},
		{
			timestamps: false,
			tableName: 'continent'
		}
	);

	//Continent.associate = function(models) {
	//Continent.hasMany(models.Country, {
	//	as: 'Country',
	//	foreignKey: 'continentCode'
	//});
	//};
	return Continent;
};
